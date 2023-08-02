import React from 'react'
import classes from './Navigation.module.css'
import {BsCart4} from '../../../node_modules/react-icons/bs'

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__ul}>
        <li className={classes.nav__li}>
          LOGO
        </li>
        <li className={classes.nav__li}>
          Home
        </li>
        <li className={classes.nav__li}>
          Products
        </li>
        <li className={classes.nav__li}>
          About
        </li>
        <li className={classes.nav__li}>
          Contact
        </li>
        <li className={classes.nav__cart}>
          <BsCart4/>
          <span className={classes.counter}>0</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation