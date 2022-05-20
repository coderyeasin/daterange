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
  const [isLoading, setIsLoading] = useState(true)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  ///////////////////with EMAIL and Password//////////////
  const handleNewUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setIsErrors("");
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setIsErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  ////////////////////////User Login//////////////////
  const handleLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setIsErrors("");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setIsErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observe
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout
  const logOut = () => {
      setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    handleGoogle,
    handleNewUser,
    handleLogin,
    isErrors,
    user,isLoading,
    logOut,
  };
};

export default useFirebase;
