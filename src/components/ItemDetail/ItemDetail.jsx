import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.detailImg} src={img} alt="" />
                <div className={styles.detail}>
                    <h4>{name}</h4>
                    <p>Precio: ${price}</p>
                    <p>Categoría: {category}</p>
                    <p>Descripción: {description}</p>
                    <p>stock: {stock}</p>

                    <ItemCount initial={1} stock={stock} onAdd={(quantity)=>{console.log('Cantidad agregada', quantity)}}/>
                </div>

                

            </div>

        </>

    )
}

export default ItemDetail