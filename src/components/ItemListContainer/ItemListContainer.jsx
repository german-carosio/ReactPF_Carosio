import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
//import { getProductByCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { mayus } from '../../Functions'
import Order from '../Order/Order'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [productsCopy, setProductsCopy] = useState([])

  const { categoryId } = useParams()


  useEffect(() => {
    /*  const asyncFunc = categoryId ? getProductByCategory : getProducts
     asyncFunc(categoryId)
       .then(response => {
         setProducts(response)
         setProductsCopy(response)
       })
       .catch(error => {
         console.log(error)
       }) */

    //Mostrar por categoría desde Firebase por collection
    const productsCollection = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')
    
    //Traigo los productos de la collection que definí
    getDocs(productsCollection)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const fields = doc.data()
          return { id: doc.id, ...fields }
        })
        setProducts(productsAdapted)
        setProductsCopy(productsAdapted)
      })
      .catch(error => {
        console.log('Hubo un error al traer los datos de Firebase');
      })
      .finally(() => {
        /* pasar el setLoading a false no incluido aun */
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