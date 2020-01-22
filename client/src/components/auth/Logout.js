import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../action/authActions';
import { useSelector, useDispatch } from 'react-redux';

function Logout() {
  const dispatch = useDispatch();

  const outclick = () => {
    dispatch(logout());
  };
  return (
    <button onClick={outclick} href="#">
      Logout
    </button>
  );
}

export default Logout;
