import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav >
        <Link to={'/'}>
          <img className={styles.logo} src={logo} alt="imagen logo" />
        </Link>
        
        <ul className={styles.menu}>
          <li className={styles.menuItem}><NavLink to={`/`} className={styles.menuLink}>Todos</NavLink></li>
          <li className={styles.menuItem}><NavLink to={`/category/interior`} className={styles.menuLink}>interior</NavLink></li>
          <li className={styles.menuItem}><NavLink to={`/category/exterior`} className={styles.menuLink}>Exterior</NavLink></li>
          <li className={styles.menuItem}><NavLink to={`/category/suculentas`} className={styles.menuLink}>Suculentas</NavLink></li>
        </ul>

        <div className={styles.derecha}>

          <div className={styles.user}>
            
          <span className="material-symbols-outlined">
            account_circle
          </span>
          </div>

          <Link className={styles.cart} to={`/cart`}><CartWidget /></Link>
          
        </div>

      </nav>
    </>
  )
}

export default NavBar