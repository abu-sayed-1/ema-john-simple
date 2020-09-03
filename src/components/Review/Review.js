import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
      const newCart = cart.filter(pd => pd.key !== productKey);
      setCart(newCart);
      removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart)
            const  cartProducts= productKeys.map(key => {
            const product =   fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts)

    },[])
    return (
        <div className="twin-container">
           <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        key={pd.key} product={pd}
                        removeProduct={removeProduct}></ReviewItem>)
                    
                } 
             </div>
                <div className="cart-container">
                     <Cart cart={cart}></Cart>
                </div>
         
        </div>
    );
};

export default Review;