import React from 'react'
import styles from './CartView.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartView = () => {

  const { cart, total, removeItem, clearCart } = useCart()


  return (
    <>
      <section className={styles.container}>
        {
          cart.map(prod => {
            return (
              <div className={styles.item} key={prod.id}>
                <img className={styles.img} src={prod.img} alt="" />
                <h3>{prod.name}</h3>
                <h4>Precio: ${prod.price}</h4>
                <p>x {prod.quantity}</p>
                <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                <button className={styles.btn} onClick={() => {

                  Swal.fire({
                    title: "¿Esta seguro?",
                    text: "Eliminara de forma permanente el item",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, eliminar"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Eliminado!",
                        text: "El item fue eliminado",
                        icon: "success"
                      });
                      removeItem(prod.id)
                    }
                  })

                }}>
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>
              </div>
            )
          })
        }
        <div>
          <h2>Total: ${total}</h2>
        </div>

        <div className={styles.btns}>
          <Link to={'/checkout'}><button className='btn1'>Crear Orden</button></Link>
          <button className='btn2' onClick={() => {
            
            if (cart.length !== 0) {
              Swal.fire({
                title: "¿Esta seguro?",
                text: "Eliminara de forma permanente el carrito",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Eliminado!",
                    text: "El carrito fue eliminado",
                    icon: "success"
                  });
                  clearCart()
                }
              })
            } 

            

          }}>Eliminar carrito</button>
        </div>

      </section >



    </>

  )
}

export default CartView