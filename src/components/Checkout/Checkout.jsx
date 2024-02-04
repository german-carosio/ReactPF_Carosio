import React from 'react';
import { useCart } from '../../context/CartContext';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cart, total } = useCart();

  const createOrder = async (userData) => {
    
      const objOrder = {
        buyer: {
          name: 'German', phone: 1161245051, email: 'german@geman.com'
        },
        items: cart,
        total: total,
      }

      const ids = cart.map(prod => prod.id)

      const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

      const querySnapshot = await getDocs(productsCollection)

      console.log(querySnapshot);

    
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
