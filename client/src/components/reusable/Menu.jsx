import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    
    

    return (
        
                <div className='menu'>
                
                <NavLink className='link' to='/'>Login</NavLink>
                <NavLink className='link' to='/register'>Register</NavLink>
                <NavLink className='link' to='/jokes'>Jokes</NavLink>
                </div>  
        

       
    );
};

export default Menu;