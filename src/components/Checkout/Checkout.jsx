import React, { useState } from 'react'
import styles from './Checkout.module.css'
import { Timestamp } from 'firebase/firestore'
import { useCart } from '../../context/CartContext'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {

  const { cart, total } = useCart()

  const [orderId, setOrderId] = useState('')

  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        userData: {
          name, phone, email
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      }
    }
     catch (error) {
      console.log(error);
  }
}

if (orderId) {
  return (<h1>El id de su ordern es: {orderId}</h1>)
}

return (
  <>
    <div className={styles.container}>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder}/>
    </div>
  </>

)
}

export default Checkout