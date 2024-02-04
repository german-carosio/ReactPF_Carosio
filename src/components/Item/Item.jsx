import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

    return (

        <>
        <div className={styles.container}>
            <div className={styles.imgContainer} >
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>${price}</p>
            {/* mando el id de producto por ruta al detalle en la ruta que previamente asigné en App.jsx  */}
            <Link to={`/item/${id}`}><button className='btn1'>Ver detalle </button></Link>
            
        </div>
        
        </>
        

        
    )
}

export default Item