import React from 'react'
import logo from '../../assets/logo.png'
import estilos from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <>
      <nav className={estilos.container}>
        <img className={estilos.logo} src={logo} alt="" />

        <ul className={estilos.menu}>
          <li className={estilos.menuItem}><a href="#" className={estilos.menuLink}>Remeras</a></li>
          <li className={estilos.menuItem}><a href="#" className={estilos.menuLink}>Chombas</a></li>
          <li className={estilos.menuItem}><a href="#" className={estilos.menuLink}>Bermudas</a></li>
        </ul>

        <div className={estilos.derecha}>

          <div className={estilos.user}>
            
          <span className="material-symbols-outlined">
            account_circle
          </span>
          <p className={estilos.userTxt}>Ingresar/Registarse</p>
          </div>

          <CartWidget />
          
        </div>

      </nav>
    </>
  )
}

export default NavBar