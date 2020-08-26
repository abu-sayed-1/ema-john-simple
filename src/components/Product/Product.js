import React from 'react';
import './Product.css'
const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className='product-name'>{name}</h4>
        <p><small>{seller}</small></p>
        <h3>${price}</h3>
        <p><small>only {stock} left in stock - Order soon</small></p>
      </div>

    </div>
  );
};

export default Product;