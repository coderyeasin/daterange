import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import dateInitialization from '../firebase/firebase.init';

//Initialization
dateInitialization()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogle = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
  }
    return {
      handleGoogle,
    };
};

export default useFirebase;