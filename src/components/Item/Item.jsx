import React from 'react'

const Item = ({ id, title, thumbnail, price }) => {
    return (
        <div>
            <h4>{title}</h4>
            <img src={thumbnail} alt="" />
            <p>${price}</p>
            <button>Agregar al carrito</button>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item