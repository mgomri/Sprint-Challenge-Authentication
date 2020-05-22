import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Menu from './reusable/Menu';


const Register = () => {
    
    const initialState = {
        username: '',
        password: ''  
    }
    
    const [credentials, setCredentials] = useState(initialState);
    const history = useHistory();

    const onChangeHandler = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }
    
    const signup = e => {
        e.preventDefault();
        axios.post('https://localhost:3300/api/auth/register', credentials)
        .then(res =>{
            console.log(res);
            history.push('./login')
        })
        .catch(err => console.log(err));
        setCredentials(initialState);
        
    };
    
       return ( 

            
        <div className='register'>
            <Menu />
            <div className='title is-3'>Register here</div>
        <form className='form' onSubmit={signup}>
               
                        <input
                            className='input is-large'
                            type='text'
                            name='username'
                            onChange={onChangeHandler}
                            value={credentials.usename}
                            placeholder='Username'
                        />

                       <div className='spacer' />

                        <input
                            className='input is-large'
                            type='password'
                            name='password'
                            onChange={onChangeHandler}
                            value={credentials.password}
                        />

                <div className='dbl-spacer'/>
                <button type='submit' className='button is-dark is-large'>
                    Register
                </button>
            </form>
            </div>
       )
  
            
            
    

}

export default Register;