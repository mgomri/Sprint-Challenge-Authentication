import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import Menu from './reusable/Menu';
import Joke from './Joke';





const JokeList = () => {
    
    const [jokes, setJokes] = useState([]);
   

    const fetchjokes = () => {
        axiosWithAuth()
        .get('/api/jokes')
        .then(res => {
           
            setJokes(res.data);
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchjokes();
    }, []);

    return(
        <div className='joke-list'>
            
            <Menu />
        {jokes.map(el => 
            <Joke joke={el} key={el.id} /> 
        )}         
        </div>
    )
};

export default JokeList;