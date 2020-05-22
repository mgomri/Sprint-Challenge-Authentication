import React from 'react';

const Joke = ({ joke }) => {
    return (
        <div className='box joke'>
            <p className='title is-6'>{joke.joke}</p>
        </div>

    );
}
export default Joke;