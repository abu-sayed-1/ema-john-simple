import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    const savedCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: savedCart, Shipment: data, orderTime: new Date() }

    fetch('http://localhost:5000/addOrder', {
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

  };

  return (

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
  );
};

export default Shipment;