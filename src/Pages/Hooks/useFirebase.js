import { useEffect, useState } from 'react';
import initializeFirebase from '../Login/Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // signin with Google
  const signWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Register new user

  const registerNewUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const newUser = { email, displayName: name };
        // Signed in
        setUser(newUser);
        //Auth Erros
        setAuthError('');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });
        if (result) {
          alert('Registration Successfull');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
  };

  // watching user behavior
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // userSignOut

  const userLogOut = () => {
    setIsLoading(true);
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
    user,
    authError,
    isLoading,
    signWithGoogle,
    userLogOut,
    registerNewUser,
  };
};

export default useFirebase;
