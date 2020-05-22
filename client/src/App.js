import React from 'react';
import JokeList from './components/JokeList';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
     
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />  
      <PrivateRoute path='/jokes' component={JokeList} />
    </div>
  );
}

export default App;
