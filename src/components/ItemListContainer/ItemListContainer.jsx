import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { mayus } from '../../Functions'
import Order from '../Order/Order'

//https://www.youtube.com/watch?v=OGwPjSxm1lU paginación


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [productsCopy, setProductsCopy] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
        setProductsCopy(response)
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId])

  return (
    <>
      <div className={styles.container}>

        <Order setProducts={setProducts} products={products} productsCopy={productsCopy} />

        <h3>{mayus(categoryId ? categoryId : 'Todas las plantas')}</h3>
        <ItemList products={products} />
      </div>
    </>

  )
}

export default ItemListContainer