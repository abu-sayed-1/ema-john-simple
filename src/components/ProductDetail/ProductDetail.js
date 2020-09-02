import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    // console.log(product)
    return (
        <div>
            <h1>product Detail coming soon ....({productKey})</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;




 

// -- mini explore 00003----go to Product components & go to App.js ...
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
// import Product from '../Product/Product';

// const ProductDetail = () => {
//     const {productKey} = useParams()
//     const product = fakeData.find(pd => pd.key === productKey)
//     // console.log(product)
//     return (
//         <div>
//             <h1>{productKey}product Detail coming soon ....</h1>
//             <Product showAddToCart={false} product={product}></Product>
//         </div>
//     );
// };

// export default ProductDetail;