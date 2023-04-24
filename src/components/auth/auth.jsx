import React, { useContext, useEffect } from "react";
import Configs from "../../firebase/Configs";

export const AuthContext = React.createContext();

export const AuthProvider = ({}) => {
  const [currentUser, setcurremtUser] = useContext(null);
  const [loading, setLoading] = useContext(null);
};

useEffect(() => {
  Configs.auth().onAuthStateChanged((user) => {
    setCurrentUser(user);
    setLoading(false);
  });
});

return <></>;
