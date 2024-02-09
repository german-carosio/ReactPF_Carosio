import { createContext, useContext, useState } from "react"
import Swal from 'sweetalert2'
/*Creo el context*/

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agregado al carrito",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Ya se encuentra en el carrito",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)
    }

    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach(prod=>{
            accu += prod.quantity
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let accu = 0
        cart.forEach(prod=>{
            accu += prod.quantity * prod.price
        })
        return accu
    } 

    const total = getTotal()

    const clearCart = () => {
       setCart([]) 
    } 


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(CartContext)
}