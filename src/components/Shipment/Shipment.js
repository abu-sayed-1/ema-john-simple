import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log('form submitted',data)
    
  };
 
  return (

     <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue= {loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
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