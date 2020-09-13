
 import React, { createContext, useState } from 'react';
 import './App.css';
 import Header from './components/HEADER/Header';
 import Shop from './components/Shop/Shop';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";
 import Review from './components/Review/Review';
 import Inventory from './components/Inventory/Inventory';
 import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 
export const UserContext = createContext();

 function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
   return (
     
       <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
         <h1>email:{loggedInUser.email}</h1>
         <Router>
       <Header></Header>
        <Switch>
          <Route exact path='/shop'>
          <Shop></Shop>
          </Route>
          <Route path="/review">
           <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route exact path="/">
           <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
           <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
   );
 }
 
 export default App;
 



 






// --Module No:- 37 --এই রাউড ব্যবহার করে তুমি বাটনটি ক্লিক করলে এক জায়গায় যাবে আর একটা বাটনে ক্লিক করলে আরেক জায়গায় যাবে যে বাটন ক্লিক করবে ওই বাটনে জিনিস গুলো দেখাবে বাকিগুলোও হিডেন করে  দিবে  আর  যদি ভুল হয় তাহলে এরর  দিবে। এই জিনিসগুলো খুবই ইম্পর্টেন্ট এবং খুব ইন্টারেস্টিং জিনিস
// import React from 'react';
// import './App.css';
// import Header from './components/HEADER/Header';
// import Shop from './components/Shop/Shop';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Review from './components/Review/Review';
// import Inventory from './components/Inventory/Inventory';
// import NotFound from './components/NotFound/NotFound';

// function App() {
//   return (
//     <div>
//        <Header></Header>
//       <Router>
//         <Switch>
//           <Router path='/shop'>
//           <Shop></Shop>
//           </Router>
//           <Router path="/review">
//            <Review></Review>
//           </Router>
//           <Router path="/inventory">
//             <Inventory></Inventory>
//           </Router>
//           <Router exact path="/">
//            <Shop></Shop>
//           </Router>
//           <Route path="*">
//           <NotFound></NotFound>
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
