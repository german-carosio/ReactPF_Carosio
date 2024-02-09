import React from 'react'
import logo from '../../assets/logo.png'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className={classes.container}>
        <Link to={'/'}>
          <img className={classes.logo} src={logo} alt="imagen logo" />
        </Link>
        
        <ul className={classes.menu}>
          <li className={classes.menuItem}><NavLink to={`/`} className={classes.menuLink}>Todos</NavLink></li>
          <li className={classes.menuItem}><NavLink to={`/category/interior`} className={classes.menuLink}>interior</NavLink></li>
          <li className={classes.menuItem}><NavLink to={`/category/exterior`} className={classes.menuLink}>Exterior</NavLink></li>
          <li className={classes.menuItem}><NavLink to={`/category/suculentas`} className={classes.menuLink}>Suculentas</NavLink></li>
        </ul>

        <div className={classes.derecha}>

          <div className={classes.user}>
            
          <span className="material-symbols-outlined">
            account_circle
          </span>
          </div>

          <Link className={classes.cart} to={`/cart`}><CartWidget /></Link>
          
        </div>

      </nav>
    </>
  )
}

export default NavBar