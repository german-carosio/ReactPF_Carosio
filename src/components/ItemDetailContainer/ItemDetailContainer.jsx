import { useEffect, useState } from 'react'
//import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {id} = useParams()

    useEffect(()=>{
        /* getProductById(parseInt(id))
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.log(error)
        }) */

        const productDocument = doc(db, 'products', id)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log('Hubo un error al traer los datos de Firebase');
              })
              .finally(() => {
                /* pasar el setLoading a false (no incluido aun) */
              })

    },[id])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>

  )
}

export default ItemDetailContainer