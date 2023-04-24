import React, { useContext, useEffect } from "react";
import Config from "../../firebase/Config";

export const AuthContext = React.createContext();

export const AuthProvider = ({}) => {
  const [currentUser, setCurremtUser] = useContext(null);
  const [loading, setLoading] = useContext(null);

  useEffect(() => {
    Config.auth().onAuthStateChanged((user) => {
      setCurremtUser(user);
      setLoading(false);
    });
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  return;
  <AuthContext.Provider></AuthContext.Provider>;
};
