import React from 'react'
import styles from './Item.module.css'

const Item = ({ id, title, thumbnail, price }) => {
    return (

        <>
        <div className={styles.container}>
            <h4>{title}</h4>
            <div className={styles.imgContainer} >
                <img src={thumbnail} alt="" />
            </div>
            <p>${price}</p>
            <button className='btn1'>Agregar al carrito</button>
            <button className='btn2'>Ver detalle </button>
        </div>
        
        </>
        

        
    )
}

export default Item