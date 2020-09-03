import React from 'react';

const Cart = (props) => {
            const cart = props.cart;
            const total = cart.reduce((total,prd)=> total + prd.price,0)
            let shipping = 0;
            if(total > 35){

                shipping = 0;

            }
            else if(total>15){

                shipping = 4.99;

            }
            else if(total > 0){
                shipping = 12.99;
            }

            const tax = (total / 10).toFixed(2);
            const grandTotal = Math.round(total + shipping + Number(tax)).toFixed(2);
            const formatNumber = num =>{
            const precision = num.toFixed(2);
            return Number(precision);
        }

    return (
        <div>
                <h4>Order Summery</h4>
                <p>items Ordered:{props.cart.length}</p>
                <p>product Price:{formatNumber(total)}</p>
                <p>Shipping Const:{shipping}</p>
                <p>tax + vat:{tax}</p>
                <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;