import React from 'react'
import styles from './CartView.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {

  const { cart, total, removeItem, clearCart } = useCart()

  return (
    <>
      <section className={styles.container}>
        <h1>CartView</h1>
        {
          cart.map(prod => {
            return (
              <div className={styles.item} key={prod.id}>
                <img className={styles.img} src={prod.img} alt="" />
                <h3>{prod.name}</h3>
                <h4>Precio: ${prod.price}</h4>
                <p>x {prod.quantity}</p>
                <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                <button className={styles.btn} onClick={()=>removeItem(prod.id)}><span className="material-symbols-outlined">
delete
</span> </button>
              </div>
            )
          })
        }
        <div>
          <h2>Total: ${total}</h2>
        </div>

        <div className={styles.btns}>
          <Link to= {'/checkout'}><button className='btn1'>Confirmar compra</button></Link>
          <button className='btn2' onClick={()=>{clearCart()}}>Eliminar carrito</button>  
        </div>

      </section>



    </>

  )
}

export default CartView