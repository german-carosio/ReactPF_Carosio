import React from 'react'
import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({products}) => {
  return (
    <div className={styles.container}>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList