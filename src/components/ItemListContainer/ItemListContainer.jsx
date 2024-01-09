import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'

//https://www.youtube.com/watch?v=OGwPjSxm1lU paginación


//Primera letra mayuscula
function mayus(text) {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest;
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [productsCopy, setProductsCopy] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
    .then(response =>{
        setProducts(response)
        setProductsCopy(response)
    })
    .catch(error =>{
      console.log(error)
    })
}, [categoryId])
  
  return (
    <>  
      <div className={styles.container}>
      <button onClick={()=>/*fun orden*/{setProducts([].concat(products).sort((a,b)=> a.price - b.price))}}>Menor precio</button>
      <button onClick={()=>{setProducts([].concat(products).sort((a,b)=> b.price - a.price))}}>Mayor precio</button>
      <button onClick={()=>{setProducts(productsCopy)}}>Quitar filtros</button>
      <h3>{mayus(categoryId ? categoryId : 'Todas las plantas')}</h3>
      <ItemList products={products}/>
      </div>
    </>
    
  )
}

export default ItemListContainer