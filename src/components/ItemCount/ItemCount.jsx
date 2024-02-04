import React, { useState } from 'react'
import styles from './ItemCount.module.css'
import { Link, NavLink } from 'react-router-dom'

const ItemCount = ({ stock, addCart, quantity, setQuantity }) => {

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const subtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.count}>
                <button className={styles.btnCount} onClick={subtract}>-</button>
                <h4 className={styles.number}>{quantity}</h4>
                <button className={styles.btnCount} onClick={add}>+</button>
            </div>

            <div className={styles.btnsCart}>
                <button className='btn1' onClick={() => addCart(quantity)} >Agregar al carrito</button>
                <Link to={`/cart`}><button className='btn2' >Ir al carrito</button></Link>
                
            </div>
            

        </div>
    )
}

export default ItemCount