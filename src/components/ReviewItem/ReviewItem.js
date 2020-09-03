import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,img,price,key} = props.product;
    return (
        <div style={{border:'2px solid red',color:'cyan',margin:'30px',padding:'20px',borderRadius:'10px'}} className="review-item">
            <img style={{width:'10%'}} src={img} alt=""/>
            <h3>name:{name}</h3>
            <p>quantity:{quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button
             className="main-btn"
             onClick={() => props.removeProduct(key)}
             >Remove</button>
             
        </div>
    );
};

export default ReviewItem;