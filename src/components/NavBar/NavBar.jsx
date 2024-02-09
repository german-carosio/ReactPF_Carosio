import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
      <nav className='header' >
        <Link to={'/'}>
          <img className='logo'  src={logo} alt="imagen logo" />
        </Link>
        
        <ul className='menu'>
          <li className='menuItem'><NavLink className='menuLink' to={`/`}>Todos</NavLink></li>
          <li className='menuItem'><NavLink className='menuLink' to={`/category/interior`}>interior</NavLink></li>
          <li className='menuItem'><NavLink className='menuLink' to={`/category/exterior`}>Exterior</NavLink></li>
          <li className='menuItem'><NavLink className='menuLink' to={`/category/suculentas`}>Suculentas</NavLink></li>
        </ul>

        <div className='derecha'>

          <div className='user'>
            
          <span className="material-symbols-outlined">
            account_circle
          </span>
          </div>

          <Link className='cart' to={`/cart`}><CartWidget /></Link>
          
        </div>

      </nav>
    </>
  )
}

export default NavBar