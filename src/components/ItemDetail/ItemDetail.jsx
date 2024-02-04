import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'
import { useCart  } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, img, price, category, stock, description }) => {
    
    const {addItem} = useCart()

    const [quantity, setQuantity] = useState(1)

    const [checkAdd, setCheckAdd] = useState(false)
    
    const addCart = (quantity)=>{ 

        setCheckAdd(true)

        const objProductToAdd = {
            id, name, price, quantity, img
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
                    {
                        checkAdd  
                        ? (<div className={styles.btns}>
                            <Link to = '/cart'><button className='btn1'>ir al carrito</button></Link>
                            <Link to = '/'><button className='btn2'>Seguir comprando</button></Link>
                            </div>)
                        : (<ItemCount stock={stock} addCart={addCart} quantity={quantity} setQuantity={setQuantity} />)
                    }
                    
                </div>

                

            </div>

        </>

    )
}

export default ItemDetail