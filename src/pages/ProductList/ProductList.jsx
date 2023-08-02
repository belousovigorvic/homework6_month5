import React from 'react'
import product from '../../products.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import classes from './ProductList.module.css'

const ProductList = () => {
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
        />
      ))}
    </div>
  )
}

export default ProductList