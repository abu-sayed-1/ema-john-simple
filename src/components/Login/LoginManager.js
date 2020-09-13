import *as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';


    export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
     }
 };

// handle Google SingIn  -------------------------------------
 export const handleGoogleSingIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user;
      const signedInUser = {
        isSignIn:true,
        name:displayName,
        email:email,
        photo:photoURL
        
      }
       return signedInUser;
 
    })
    .catch (error => {
       console.log(error);
       console.log(error.message);
    })
 
  };

  
// Facebook Sign In here||----------------------------------------
export const handleFBSignIn = () =>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbProvider)
     .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      return user;
      console.log('fb User after sign in',user)

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
   };

   
// handle Sign Out ---------------------------
 export const handleSignOut = () => {
   return firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignIn:false,
        name:'',
        photo:'',
        email:'',
        error:'',
        success:false
    
      }
     return signedOutUser;
    })
    .catch( error => {
 
    })
  }

  
// handle Submit Area--------------------------------------------------------
//  export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
//     .then(res => {
//       const newUserInfo = {...user} ;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       updateUserName(user.name);
//   })
//   .catch(error => {
//     const newUserInfo = {...user};
//     newUserInfo.error = error.message;
//     newUserInfo.success = false;
//     setUser(newUserInfo);
  
//   });
//  } 
   
// export const signInWithEmailAndPassword = () => {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user} ;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sign in user info', res.user);
      
//     })
//     .catch(error => {
//       const newUserInfo = {...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
// };

// // update User Name ----
// const updateUserName = name => {
//     let user = firebase.auth().currentUser;

//   user.updateProfile({ 
//     displayName: name, 

//   }).then(() => {
//     console.log('Update successful')
//   })
//   .catch( error => {
//     console.log(error)
//   });
// }
// // ------------------------------------------------------------
