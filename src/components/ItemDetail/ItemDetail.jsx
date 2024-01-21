import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'
import { useCart  } from '../../context/CartContext';
import { useState } from 'react';


const ItemDetail = ({ id, name, img, price, category, stock, description }) => {

    const [quantity, setQuantity] = useState(1)

    const {addItem} = useCart()
    
    const addCart = (quantity)=>{ 
        
        const objProductToAdd = {
            id, name, price, quantity
        }

        addItem(objProductToAdd)
        setQuantity(quantity)
    }

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
                    <ItemCount stock={stock} addCart={addCart} quantity={quantity} setQuantity={setQuantity}/>
                </div>

                

            </div>

        </>

    )
}

export default ItemDetail