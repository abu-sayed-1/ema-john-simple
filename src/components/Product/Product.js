import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
  console.log(props);
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
        <button
         className="main-btn"
        onClick={() => props.handleAddProduct(props.product)}
         ><span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>add to cart</button>
      </div>

    </div>
  );
};

export default Product;