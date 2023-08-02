import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './ShopCart.module.css'
import { shopCartActions } from '../../store/shopCartSlice'

const ShopCart = () => {
  const dispatch = useDispatch()
  const handleClearCartClick = () => {
    dispatch(shopCartActions.clearCart())
  }

  const state = useSelector(state => state.cart)
  return (
    <div className={classes.shopCart}>
      <h1 className={classes.title}>Shoping Cart</h1>
      <ul className={classes.ul}>
        {state.map(product => (
          <li key={product._id} className={classes.li}>
            <span className={classes.name}>{product.name}</span>
            <span className={classes.price}>{product.price}</span>
          </li>
        ))}
      </ul>
      <button className={classes.delete} onClick={handleClearCartClick}>Clear Cart</button>
    </div>
  )
}

export default ShopCart