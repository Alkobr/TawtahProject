import React, { useState } from 'react';
import { createContext } from 'react';
import AuthContext from './AuthContext';
const AuthContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const isLoging = user ? true : false;
  const login = (user) => {
    setUser(user);
    // stringify to convert json to string
    localStorage.setItem('user', JSON.stringify(user));
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const values = { user, isLoging, login, logOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;