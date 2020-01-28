import React, { useState, useEffect } from 'react';
import { login } from '../../action/authActions';
import { clearErrors } from '../../action/errorActions';
import { useSelector, useDispatch } from 'react-redux';
import { post } from 'axios';

const Login = React.memo(() => {
  const [input, setinputs] = useState({
    email: '',
    password: ''
  });
  const [msg, setmsg] = useState(null);
  const auth = useSelector(state => state.auth);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setmsg({ msg: error.msg.msg });
    } else {
      setmsg(null);
    }
  });

  const onChange = e => {
    const { value, name } = e.target;

    setinputs({
      ...input,
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
      email: input.email,
      password: input.password
    });

    post('/api/auth', body, config)
      .then(response => {
        dispatch(login(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>Login</div>
      <div>
        {msg ? <div>{msg}</div> : null}
        <form onSubmit={onSubmit}>
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
          <button style={{ marginTop: '2rem' }} block>
            Login
          </button>
        </form>
      </div>
    </div>
  );
});

export default Login;
