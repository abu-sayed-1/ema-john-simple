import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,img,price} = props.product;
    return (
        <div style={{border:'2px solid red',color:'cyan',height:'270px',margin:'30px',padding:'20px',borderRadius:'10px'}} className="review-item">
            <img style={{width:'10%'}} src={img} alt=""/>
            <h3>name:{name}</h3>
            <p>quantity:{quantity}, ${price}</p>
            <br/>
            <button className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;