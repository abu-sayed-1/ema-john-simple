import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Shipment.css'

const Shipment = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [shippingData, setShippingData] = useState(null)

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    setShippingData(data);
  };

  // handel Payment and Shipment input data |||
  const handlePaymentSuccess = paymentId => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      Shipment: shippingData,
      paymentId,
      orderTime: new Date()
    }

    fetch('https://boiling-wave-04634.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder();
          //ei function ^^^ ta databaseManager.js theke asteche eta diye amra user ze product gula order korche oi gula Shipment e user giye order procied kora por localStorage store empty kore deci user  ze product order korch oi product gulo localStorage theke empty kore dichi...............
          alert('your order placed successfully');
        }
      })
  }

  return (




    <div className="row container">
      <div className="col-md-6" style={{ display: shippingData ? 'none' : 'block' }}>
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your address" />
          {errors.address && <span className="error">address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div className="col-md-6" style={{ display: shippingData ? 'block' : 'none' }}>
        <h2>Please Pay for me</h2>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>

    </div>



    // ekta kaj tumi chaile duivabe korote poro duita ei same kaj korve |||001 
    // <div className="row container">
    // {
    //   shippingData ? 
    //   <div className="col-md-6">
    //   <h2>Please Pay for me</h2>
    //   <ProcessPayment />
    // </div>:
    //   <div className="col-md-6">
    //   <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
    //     <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
    //     {errors.name && <span className="error">Name is required</span>}

    //     <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
    //     {errors.email && <span className="error">Email is required</span>}

    //     <input name="address" ref={register({ required: true })} placeholder="Your address" />
    //     {errors.address && <span className="error">address is required</span>}

    //     <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
    //     {errors.phone && <span className="error">Phone Number is required</span>}

    //     <input type="submit" />
    //   </form>
    // </div>

    // }
    // </div>

  );
};

export default Shipment;