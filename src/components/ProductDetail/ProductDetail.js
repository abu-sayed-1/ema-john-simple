import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey])
    // ei code diye ^^ amer useParams er productsKey ta ke update korte chi useEffect er modde zoto var 
    //  useParams theke dynamic productKey aste che tot var uesEffect ke Update kortechi
    return (
        <div>
            <h1>product Detail coming soon ....({productKey})</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
 