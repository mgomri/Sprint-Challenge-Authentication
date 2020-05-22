import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Menu from './reusable/Menu';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const initialState = { username: '', password: ''};
    const [credentials, setCredentials] = useState(initialState);
    const { push } = useHistory();

    const onChangeHandler = (e) => {
        e.preventDefault();
        e.persist();
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value,
        });
      };

      const login = (e) => {
        e.preventDefault();
        axios
          .post('http://localhost:3300/api/auth/login', credentials)
          .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            push("/jokes");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            alert("Login failed. Please try again.");
          });
    
        setCredentials(initialState);
      };


      return (
          <div className='login'>
            
            <Menu />
            <div className='title is-3'>Welcome to Dad Jokes Api</div>
              <form className='form' onSubmit={login}>
              <input
                      className="input is-large"
                      type="text"
                      name="username"
                      onChange={onChangeHandler}
                      value={credentials.username}
                      placeholder='Username'
                    />
                <div className='spacer' />
                <input
                      className="input is-large"
                      type="password"
                      name="password"
                      onChange={onChangeHandler}
                      value={credentials.password}
                      placeholder='Password'
                    />
                    <div className='dbl-spacer' />
                <button 
                    type='submit' 
                    className='button is-dark is-large login-btn'
                >
                    Login
                </button>

              </form>
          </div>
      )
};


export default Login;