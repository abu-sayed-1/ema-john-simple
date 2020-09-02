import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const {cart, setCart} = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const  counts= productKeys.map(key => {
            const product =   fakeData.f
        })
        console.log(productKeys)

    })
    return (
        <div>
            <h1>Review pages</h1>
        </div>
    );
};

export default Review;