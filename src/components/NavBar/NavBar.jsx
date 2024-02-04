import React from 'react'
import logo from '../../assets/logo.png'
import estilos from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className={estilos.container}>
        <Link to={'/'}>
          <img className={estilos.logo} src={logo} alt="imagen logo" />
        </Link>
        
        <ul className={estilos.menu}>
          <li className={estilos.menuItem}><NavLink to={`/`} className={estilos.menuLink}>Todos</NavLink></li>
          <li className={estilos.menuItem}><NavLink to={`/category/interior`} className={estilos.menuLink}>interior</NavLink></li>
          <li className={estilos.menuItem}><NavLink to={`/category/exterior`} className={estilos.menuLink}>Exterior</NavLink></li>
          <li className={estilos.menuItem}><NavLink to={`/category/suculentas`} className={estilos.menuLink}>Suculentas</NavLink></li>
        </ul>

        <div className={estilos.derecha}>

          <div className={estilos.user}>
            
          <span className="material-symbols-outlined">
            account_circle
          </span>
          </div>

          <Link className={estilos.cart} to={`/cart`}><CartWidget /></Link>
          
        </div>

      </nav>
    </>
  )
}

export default NavBar