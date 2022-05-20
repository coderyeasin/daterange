import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import dateInitialization from "../firebase/firebase.init";

//Initialization
dateInitialization();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [errorsFire, setErrorsFire] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  //  const handleSignIn = (email, password, location, navigate) => {
  //    signInWithEmailAndPassword(auth, email, password)
  //      .then((result) => {
  //        // Signed in
  //        setErrorsFire("");
  //        const destination = location?.state?.from || "/dashboard";
  //        navigate(destination);
  //      })
  //      .catch((error) => {
  //        const errorCode = error.code;
  //        console.log(error.message);
  //        setErrorsFire(error.message);
  //      })

  //  };

  const handleLoginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // user observe
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, [auth]);

  //logout
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    handleGoogle,
    handleRegistration,
    errorsFire,
    user,
    handleLoginUser,
    logout,
    // handleSignIn,
  };
};

export default useFirebase;
