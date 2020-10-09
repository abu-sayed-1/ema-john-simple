import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('https://boiling-wave-04634.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <p><span>Name:</span><input type="text"/></p>
            <p><span>Price</span><input type="text"/></p>
            <p><span>Quantity</span><input type="text"/></p>
            <p><span>Product Image</span><input type="file"/></p>
            <button onClick={handleAddProduct}>handleAddProduct</button>
        </div>
    );
};

export default Inventory;