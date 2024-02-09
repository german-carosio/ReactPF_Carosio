import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, query, where, getDocs, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import styles from './Checkout.module.css';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { cart, total, clearCart } = useCart();

  const createOrder = async ({name, phone, email} /* userData */) => {

    setLoading(true)

    try {
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: total,
        //date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)

      const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

      const querySnapshot = await getDocs(productsCollection)

      //console.log(querySnapshot);

      const { docs} = querySnapshot

      docs.forEach(doc =>{
        const fields = doc.data()
        const stockDb = fields.stock

        const productsAddedToCart = cart.find(prod=> prod.id === doc.id)
        const prodQuantity = productsAddedToCart.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity})


          console.log('hay stock');

        } else {
          outOfStock.push({id: doc.id, ...fields})
          console.log('no dejar que se ejecute la compra porque no hay stock', outOfStock);
        }

      })

      if (outOfStock.length === 0) {

        batch.commit()

        const orderCollection = collection(db, 'orders')
        const { id } = await addDoc(orderCollection, objOrder)

        setOrderId(id)

        console.log(name, phone, email, id);

        clearCart()

      } else {
        console.log('Hay productos que no tienen stock');
      }
    
    } catch (error) {
      console.log('error - hubo un error al crear la orden');
    } finally {
      setLoading(false)
    }
      
  }

  if (loading) {
    return <p className={styles.orderId}>Loading... </p>
  }

  if (orderId) {
    return <h1 className={styles.orderId}>El id de su compra es: {orderId}</h1>
  }

  return (
    <>
      <div className={styles.container}>
        {/* volver a pagina anterior */}
        <button className={styles.back} onClick={() => { <Link to={window.history.back()}></Link> }}><span className="material-symbols-outlined">
                arrow_back_ios
            </span></button>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    </>
  );
}

export default Checkout;
