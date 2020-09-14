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
        photo:photoURL,
        success:true
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
      user.success = true;
      return user;

    }).catch (error => {
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
 export const createUserWithEmailAndPassword = (name,email,password) => {
   return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
  })
  .catch(error => {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
  });
 } 
   
export const signInWithEmailAndPassword = (email,password) => {
   return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
  // update User Name ---------------------------
const updateUserName = name => {
    let user = firebase.auth().currentUser;

  user.updateProfile({ 
    displayName: name, 

  }).then(() => {
    console.log('Update successful')
  })
  .catch( error => {
    console.log(error)
  });
}
