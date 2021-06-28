import './App.css';
import React from 'react';
import Main from '../Main/Main';
import {Switch, Route} from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Account from '../Acount/Account';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <div className="app">
      
      <Switch>
        <Route exact path="/">
          <Main isLogged={isLogged}/> 
        </Route>

        <Route path="/movies">
          <Movies isLogged={true} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies isLogged={true}/>
        </Route>
        
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
          <NotFound />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
