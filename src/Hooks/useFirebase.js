import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import dateInitialization from "../Firebase/firebase.init";

//Initialization
dateInitialization();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isErrors, setIsErrors] = useState(false);

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

  ///////////////////with EMAIL and Password//////////////
  const handleNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
              setIsErrors("");
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setIsErrors(error.message);
      });
  };

  ////////////////////////User Login//////////////////
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
              setIsErrors("");
        console.log(result.user);
  
      })
      .catch((error) => {
        console.log(error.message);
        setIsErrors(error.message);
      });
  };

  // user observe
  // useEffect(() => {
  //   const unsubscribed = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser({});
  //     }
  //   });
  //   return () => unsubscribed;
  // }, [auth]);

  //logout
  // const logout = () => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  return {
    handleGoogle,
    handleNewUser,
    handleLogin,
    isErrors,
    user,
    // logout,
  };
};

export default useFirebase;
