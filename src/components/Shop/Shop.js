
import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
     const Shop = () => { 
        const first10 = fakeData.slice(0,10);
        const [products,setProducts] = useState(first10)
        const [cart,setCart] = useState([])

     const handleAddProduct = (product) => {
         const  toBeAddedKey = product.key; 
         const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
         let count = 1;
         let newCart;
         if (sameProduct) {
             count = sameProduct.quantity + 1;
             sameProduct.quantity = count;
             const others = cart.filter(pd => pd.key !== toBeAddedKey);
             newCart = [...others, sameProduct];
         }else{
             product.quantity = 1;
             newCart = [...cart,product];
         }
        //  const count = sameProduct.length;
         setCart(newCart);
         addToDatabaseCart(product.key,count);
     }

     return (
        <div className="twin-container">
            <div className="product-container">
                 {
                     products.map(pd => 
                     <Product 
                      showAddToCart={true}
                      product={pd} key={pd.key} handleAddProduct={handleAddProduct}
                    ></Product>)
                 }
            </div>
          <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;






 
//---- mini explore 00003------

// import React, { useState } from 'react';
// import './Shop.css';
// import fakeData from '../../fakeData'
// import Product from '../Product/Product';
// import Cart from '../Cart/Cart';
// const Shop = () => { 
//      const first10 = fakeData.slice(0,10);
//      const [products,setProducts] = useState(first10)
//      const [cart,setCart] = useState([])

//      const handleAddProduct = (product) =>{
//          const newCart = [...cart,product]
//          setCart(newCart)
//         //  console.log('Rakib',product)
//      }

//      return (

//         <div className="shop-container">
//             <div className="product-container">
//                  {
//                      products.map(pd => 
//                      <Product 
//                      showAddToCart={true}
//                       product={pd} key={pd.key} handleAddProduct={handleAddProduct}
//                     ></Product>)
//                  }
//             </div>
//             <div className="cart-container">
//                 <Cart cart={cart}></Cart>
//             </div>
//         </div>
        
//     );
// };

// export default Shop;
