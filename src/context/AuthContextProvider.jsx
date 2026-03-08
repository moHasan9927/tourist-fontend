import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../Firebase.console";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUpWithEmail, signInWithEmail, signUpWithGoogle }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
