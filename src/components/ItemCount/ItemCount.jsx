import React, { useState } from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const subtract = () => {
        if (quantity > initial) {
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
                <button className='btn1'>Comprar</button>
                <button className='btn2' onClick={() => onAdd(quantity)} >Agregar al carrito</button>
            </div>
            

        </div>
    )
}

export default ItemCount