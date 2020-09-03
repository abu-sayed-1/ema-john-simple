import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
  const { img, name, price, seller, stock,key } = props.product;
  return (

      <div className="product">
        <div>
          <img src={img} alt="" /> 
      </div>
          <div>
              <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
              <p><small>{seller}</small></p>
              <h3>${price}</h3>
              <p><small>only {stock} left in stock - Order soon</small></p>
              { props.showAddToCart && <button
              className="main-btn"
              onClick={() => props.handleAddProduct(props.product)}
              ><span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>add to cart
              </button>}
         </div>
    </div>
  );
};

export default Product;





 



// mini explore ---00003---------go to shop component-------------------

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
// import './Product.css'
// import { Link } from 'react-router-dom';
// const Product = (props) => {
//   console.log(props);
//   const { img, name, price, seller, stock,key } = props.product;
//   return (

//       <div className="product">
//         <div>
//           <img src={img} alt="" />
//       </div>
//       <div>
//         <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
//         <p><small>{seller}</small></p>
//         <h3>${price}</h3>
//         <p><small>only {stock} left in stock - Order soon</small></p>
//         { props.showAddToCart && <button
//          className="main-btn"
//          onClick={() => props.handleAddProduct(props.product)}
//          ><span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>add to cart
//          </button>}
//       </div>

//     </div>
//   );
// };

// export default Product;