import React, { useState, useEffect } from 'react';
import { register } from '../../action/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { post } from 'axios';

function Register() {
  const [inputs, setinput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [msgs, setmsgs] = useState(null);
  const auth = useSelector(state => state.auth);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value, name } = e.target;

    setinput({
      ...inputs,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    });

    post('/api/users', body, config)
      .then(response => {
        dispatch(register(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>Register</div>
      <div>
        {msgs ? <>{msgs}</> : null}
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={onChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onChange}
            />
            <button style={{ marginTop: '2rem' }}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
