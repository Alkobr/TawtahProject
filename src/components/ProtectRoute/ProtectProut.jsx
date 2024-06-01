import React, { useContext } from 'react';
import AuthContext from '../../context/Auth/AuthContex';
import LogIn from '../../page/LogIn';
// HOC
const ProtectProute = (props) => {
  console.log('props', props);
  const { isLoging } = useContext(AuthContext);

  console.log('is 11111111', isLoging);
  const { children } = props;

  if (!isLoging) {
    // user not Login
    return <LogIn />;
  }
  return children;
};

export default ProtectProute;