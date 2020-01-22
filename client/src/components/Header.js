import Login from './auth/Login';
import React, { useState, useEffect } from 'react';
import Register from './auth/Register';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './auth/Logout';

function Header() {
  const auth = useSelector(state => state.auth);

  const [isopen, setispoen] = useState(false);

  const goin = (
    <div>
      {auth.user ? `Welcome ${auth.user.name}` : ''} <Logout />
    </div>
  );

  const guest = (
    <>
      <Login />
      <Register />
    </>
  );
  return <div>{auth.user && auth.isAuthenticated ? goin : guest}</div>;
}

export default Header;
