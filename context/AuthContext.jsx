import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "../config/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const logIn = async () => {
    setLoading(true);
    await signInWithRedirect(auth, provider);
    setLoading(false);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, logIn, logOut, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
