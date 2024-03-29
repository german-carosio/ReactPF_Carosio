import styles from './Order.module.css'

const Order = ({setProducts, products, productsCopy}) => {
  return (
    <>
        <div className={styles.container}>
          {/* /*funciones de orden*/}
          <h4>Ordenar: </h4>
          <button className={styles.btn} onClick={() => { setProducts([].concat(products).sort((a, b) => a.price - b.price)) }}>Menor precio</button>
          <button className={styles.btn} onClick={() => { setProducts([].concat(products).sort((a, b) => b.price - a.price)) }}>Mayor precio</button>
          <button className={styles.btn} onClick={() => { setProducts(productsCopy) }}>Quitar orden</button>
        </div>

        <div>
            
        </div>
    
    </>
    
  )
}

export default Order