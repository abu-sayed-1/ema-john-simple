
 import React, { useContext, useState } from 'react';
 import { UserContext } from '../../App';
 import { useHistory, useLocation } from 'react-router-dom';
 import {createUserWithEmailAndPassword, handleFBSignIn, handleGoogleSingIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
 

  //  organize firebase Auth/..after
 const Login = () => {

   const [newUser,setNewUser] = useState(false);
   const [user,setUser] = useState({
     isSignIn:false,
     name:'',
     email:'',
     photo:'',
     password:'',
     error:''
   })
   
   initializeLoginFramework();
   const [loggedInUser,setLoggedInUser] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   let { from } = location.state || { from: {pathname: "/"} };
  
   const googleSingIn = () => {
     handleGoogleSingIn()
     .then (res => {
      handleResponse(res,true)
     })
   }
 
   const signOut = () => {
     handleSignOut()
     .then(res => {
      handleResponse(res,false);
     })
   }

   
  const handleResponse = (res,redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
     history.replace(from);
    }
  }
 
   const fBSignIn = () => {
     handleFBSignIn()
     .then(res => {
       console.log(res)
      handleResponse(res,true)
      
     })
     
   };
 
 // handle Submit Area--------------------------------------------------------
 const handleSubmit = (e) => {
   if (newUser && user.email && user.password) {
     createUserWithEmailAndPassword(user.name,user.email,user.password)
     .then(res => {
     handleResponse(res,true);
     })
   }
   if (!newUser && user.email && user.password) {
    signInWithEmailAndPassword(user.email,user.password)
     .then(res => {
      handleResponse(res,true);
     })
   }
 e.preventDefault();
 }
  
 // input condition Set here
 const handleBlur = (event) => {
   let isFieldValid = true;
   if (event.target.name === 'email') {
     isFieldValid = /\S+@\S+\.\S+/.test(event.target.value); 
   }
   if (event.target.name === 'password') {
     const isPassWordValid = event.target.value.length > 5;
     const passwordHasNumber = /\d{1}/.test (event.target.value);
     isFieldValid = passwordHasNumber && isPassWordValid ;
   }
   if (isFieldValid) {
     const newUserInfo = {...user};
     newUserInfo[event.target.name] = event.target.value;
     setUser(newUserInfo);
     
   }
 }
     return (
         <div>
              <h1>this is Login</h1>
        <div style={{marginLeft:'45%',marginTop:'10%'}}>
        {
         user.isSignIn ? 
           <button onClick={signOut} style={{color:'red'}}>sign out</button>
           :<button onClick={googleSingIn} style={{color:'red'}}>sign in</button>
       }
       <br/>
       <button onClick={fBSignIn}>Sign In using Facebook</button>
       {/* Facebook Sign In button here ^^*/}
       {
         user.isSignIn  && <div>
         <p>Welcome,{user.name}</p>
         <p>Email:{user.email}</p>
         <img src={user.photo} alt=""/>
       </div>
       } 
       <br/>
         <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
         <label htmlFor="newUser">New User Sign up</label>
        <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="You Name" required />}
          <br/>
          <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your Email" required/>
          <br/>
          <input type="password" name="password" onBlur={handleBlur}  id="" placeholder="Enter your password" required/>
          <br/>
          <input type="submit" value={newUser ?'Sign up':'Sign In'}/>
        </form>       
  
           <p style={{color:'red'}}>{user.error}</p>
          {user.success && <p style={{color:'green'}}>User { newUser ? "Created" :"Logged In"} SuccessFully </p>} 
      </div>
      </div>
      
     );
 };
 
 export default Login;









 // before 
// import React, { useContext, useState } from 'react';
// import *as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../firebase.config';
// import { UserContext } from '../../App';
// firebase.initializeApp(firebaseConfig);

// const Login = () => {
    
//     const [loggedInUser,setLoggedInUser] = useContext(UserContext)
//     const [newUser,setNewUser] = useState(false);
//   const [user,setUser] = useState({
//     isSignIn:false,
//     name:'',
//     email:'',
//     photo:'',
//     password:'',
//     error:''
  
//   })

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const fbProvider = new firebase.auth.FacebookAuthProvider();
// // handle Sign In -------------------------------------
//  const handleSingIn = () => {
//    firebase.auth().signInWithPopup(googleProvider)
//    .then(res => {
//      const {displayName,email,photoURL} = res.user;
//      const signedInUser = {
//        isSignIn:true,
//        name:displayName,
//        email:email,
//        photo:photoURL
       
//      }
//      setUser(signedInUser)

//    })
//    .catch (error => {
//       console.log(error);
//       console.log(error.message);
//    })

//  }
// // Facebook Sign In here||----------------------------------------

//  const handleFBSignIn = () =>{
//   firebase.auth().signInWithPopup(fbProvider)
//    .then(function(result) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//     console.log('fb User',user)
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;

//     // ...
//   });
//  }
 
// // ---------------------------------------------------------

// // handle Sign Out ---------------------------
//  const handleSignOut = () => {
//    firebase.auth().signOut()
//    .then(res =>{
//      const signedOutUser = {
//        isSignIn:false,
//        name:'',
//        photo:'',
//        email:'',
//        error:'',
//        success:false
   
//      }
//      setUser(signedOutUser)
//    })
//    .catch( error => {

//    })
//  }

// // handle Submit Area--------------------------------------------------------
// const handleSubmit = (e) => {
//   console.log(user.email,user.password);
//   if (newUser && user.email && user.password) {
//     firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
//       .then(res => {
//         const newUserInfo = {...user} ;
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         updateUserName(user.name);
//     })
//     .catch(error => {
//       const newUserInfo = {...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
    
//     });
//   }
//   if (!newUser && user.email && user.password) {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user} ;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       console.log('sign in user info', res.user);
      
//     })
//     .catch(error => {
//       const newUserInfo = {...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
//   }
// e.preventDefault();
// }
// // -----------------------------------------------------------------------
 
// // update User Name ----
// const updateUserName = name => {
//       let user = firebase.auth().currentUser;

//     user.updateProfile({ 
//       displayName: name, 

//     }).then(() => {
//       console.log('Update successful')
//     })
//     .catch( error => {
//       console.log(error)
//     });
// }

// //-------------------------------------------

// // input condition Set here
// const handleBlur = (event) => {
//   let isFieldValid = true;
//   if (event.target.name === 'email') {
//     isFieldValid = /\S+@\S+\.\S+/.test(event.target.value); 
//   }
//   if (event.target.name === 'password') {
//     const isPassWordValid = event.target.value.length > 5;
//     const passwordHasNumber = /\d{1}/.test (event.target.value);
//     isFieldValid = passwordHasNumber && isPassWordValid ;
//   }
//   if (isFieldValid) {
//     const newUserInfo = {...user};
//     newUserInfo[event.target.name] = event.target.value;
//     setUser(newUserInfo);
    
//   }
// }
//     return (
//         <div>
//              <h1>this is Login</h1>
//        <div style={{marginLeft:'45%',marginTop:'10%'}}>
//        {
//         user.isSignIn ? 
//           <button onClick={handleSignOut} style={{color:'red'}}>sign out</button>
//           :<button onClick={handleSingIn} style={{color:'red'}}>sign in</button>
//       }
//       <br/>
//       <button onClick={handleFBSignIn}>Sign In using Facebook</button>
//       {/* Facebook Sign In button here ^^*/}
//       {
//         user.isSignIn  && <div>
//         <p>Welcome,{user.name}</p>
//         <p>Email:{user.email}</p>
//         <img src={user.photo} alt=""/>

//       </div>
//       } 
//       <br/>
//         <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
//         <label htmlFor="newUser">New User Sign up</label>
//        <form onSubmit={handleSubmit}>
//        {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="You Name" required />}
//          <br/>
//          <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your Email" required/>
//          <br/>
//          <input type="password" name="password" onBlur={handleBlur}  id="" placeholder="Enter your password" required/>
//          <br/>
//          <input type="submit" value={newUser ?'Sign up':'Sign In'}/>
//        </form>       
 
//           <p style={{color:'red'}}>{user.error}</p>
//          {user.success && <p style={{color:'green'}}>User { newUser ? "Created" :"Logged In"} SuccessFully </p>} 
//      </div>
//      </div>
     
//     );
// };

// export default Login;