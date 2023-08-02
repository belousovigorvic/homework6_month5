import React from 'react'
import classes from './ProductCard.module.css'

const ProductCard = ({ name, price, picture, color, description, handleClick }) => {
  return (
    <div className={classes.product} >
      <img className={classes.product__img} src={picture} alt="picture" />
      <h2 className={classes.product__name} style={{ background: color }}>{name}</h2>
      <p className={classes.product__description}>{description}</p>
      <div className={classes.product__bottom}>
        <p className={classes.product__price}>{price}</p>
        <button className={classes.product__btn} onClick={handleClick}>Buy</button>
      </div>
    </div>
  )
}

export default ProductCard