import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=$celular')
    .then(response =>{
        return response.json()
    })
    .then(json => setProducts(json.results.slice(0,15)))
    .catch(error =>{
      console.log(error)
    })
}, [])

  return (
    <>
      <div className={styles.container}>
      <h1>{title}</h1>
      <ItemList products={products}/>
      </div>
    </>
    
  )
}

export default ItemListContainer