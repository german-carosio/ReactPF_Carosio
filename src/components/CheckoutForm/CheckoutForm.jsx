import React, { useState } from 'react'
import styles from './CheckoutForm.module.css'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
  return (
    <>
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleConfirm}>

            <label>
                Nombre
            <input type="text" value={name} onChange={({target})=> setName(target.value)} />
            </label>

            <label>
                Telefono
            <input type="text" value={phone} onChange={({target})=> setName(target.value)} />
            </label>

            <label>
                Email
            <input type="text" value={email} onChange={({target})=> setName(target.value)} />
            </label>
            
            <button type='submit'> Crear orden</button>

        </form>
    </div>
    </>
    
  )
}

export default CheckoutForm