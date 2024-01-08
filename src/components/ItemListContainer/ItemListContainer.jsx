import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'

function mayus(text) {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest;
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
    .then(response =>{
        setProducts(response)
    })
    .catch(error =>{
      console.log(error)
    })
}, [categoryId])

  return (
    <>  
      <div className={styles.container}>
      <h3>{mayus(categoryId ? categoryId : 'Todas las plantas')}</h3>
      <ItemList products={products}/>
      </div>
    </>
    
  )
}

export default ItemListContainer