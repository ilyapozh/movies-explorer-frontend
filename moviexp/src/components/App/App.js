import './App.css';
import React from 'react';
import Main from '../Main/Main';
import {Switch, Route} from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';


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
          <SavedMovies />
        </Route>
        
        <Route>
          
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
