import { createContext, useContext, useState } from "react"
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
        } else {
            console.error('el producto ya se encuentra en el carrito');
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

    const clear = () => {
       setCart([]) 
    } 


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(CartContext)
}