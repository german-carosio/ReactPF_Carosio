import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, query, where, getDocs, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { cart, total, clearCart } = useCart();

  const createOrder = async (userData) => {
    setLoading(true)
    try {
      const objOrder = {
        buyer: {
          name: 'German', phone: 1161245051, email: 'german@geman.com'
        },//userData
        items: cart,
        total: total,
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
    return <h1 className={styles.orderId}>Se esta generando su orden, aguarde por favor </h1>
  }

  if (orderId) {
    return <h1 className={styles.orderId}>El id de su compra es: {orderId}</h1>
    
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Checkout</h1>
        <button onClick={createOrder}>Crear orden</button>
      </div>
    </>
  );
}

export default Checkout;
