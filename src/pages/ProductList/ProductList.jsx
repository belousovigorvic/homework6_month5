import React, { useState } from 'react'
import product from '../../products.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import classes from './ProductList.module.css'
import { useDispatch } from 'react-redux'
import { shopCartActions } from '../../store/shopCartSlice'


const ProductList = () => {
  

  const dispatch = useDispatch()
  const handleAddToCartClick = (product) => {
    dispatch(shopCartActions.addToCart(product))
  }

  return (
    <div className={classes.products}>
      {product.map(product => (
        <ProductCard
          key={product._id}
          name={product.name}
          description={product.description}
          picture={product.picture}
          color={product.color}
          price={product.price}
          handleClick={() => {handleAddToCartClick(product)}}
        />
      ))}
    </div>
  )
}

export default ProductList