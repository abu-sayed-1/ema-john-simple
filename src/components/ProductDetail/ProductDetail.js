import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
const ProductDetail = () => {
    const { productKey } = useParams()
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('https://boiling-wave-04634.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false);
            })
    }, [productKey])
    // ei code diye ^^ amer useParams er productsKey ta ke update korte chi useEffect er modde zoto var 
    //  useParams theke dynamic productKey aste che tot var uesEffect ke Update kortechi
    document.title="Product Detail"
    return (
        <div>
            <h1> your product Detail ({productKey})</h1>
            {
                loading ? <p>loading....</p>:<Product showAddToCart={false} product={product}></Product>
// ei code diye tumi data ^^^ zokhon load hobe tokha user ke loading spanner dekhate parba va tumi chaile kichu keta dekha te paro 
            }


        </div>
    );
};

export default ProductDetail;
 