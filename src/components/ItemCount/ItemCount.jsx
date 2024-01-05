import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const add = () =>{
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const subtract = ()=>{
        if (quantity > initial) {
            setQuantity(quantity - 1)
        }
    }
  return (
    <div>
        <button onClick={add}>+</button>
        <h4>{quantity}</h4>
        <button onClick={subtract}>-</button>

        <button onClick={()=> onAdd(quantity)} >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount