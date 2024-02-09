import React, { useState } from 'react'
import styles from './CheckoutForm.module.css'
import Swal from 'sweetalert2'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        Swal.fire({
            title: "¿Confirmar orden?",
            text: "Se creará la orden de compra",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Creada!",
                text: "La orden fue creada",
                icon: "success"
              });
              onConfirm(userData)
            }
          })
        
    }

    

  return (
    <>
    <div className={styles.container}>
        <form className='form' onSubmit={handleConfirm}>

            <input type="text" value={name} onChange={({target})=> setName(target.value)} placeholder='Nombre' required />
                        
            <input type="number" value={phone} onChange={({target})=> setPhone(target.value)} placeholder='Teléfono' required  />
        
            <input type="email" value={email} onChange={({target})=> setEmail(target.value)} placeholder='Email' required  />
            
            
            <button className='btn1' type='submit'>Confirmar orden</button>

        </form>
    </div>
    </>
    
  )
}

export default CheckoutForm