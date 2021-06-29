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
import { fetchData } from '../../utils/MoviesApi';

function App() {
  const [moviesArray, setMoviesArray] = React.useState([]);
  const [initialMoviesArray, setInitialMoviesArray] = React.useState([]);
  const [isPreloaderIsActive, setPreloaderActivity] = React.useState(false);
  const [moreButton, setMoreButton] = React.useState(true);
  const [notFoundTitle, setNotFoundTitle] = React.useState(false);

  function checkMoviesLS() {
    const currentMoviesArray = JSON.parse(localStorage.getItem('resSearchMoviesArray'));
    
    if (currentMoviesArray) {
      setInitialMoviesArray(currentMoviesArray)
      if (window.innerWidth <= 480) {
        setMoviesArray(currentMoviesArray.slice(0,5))
        checkMoreButton(5)
      } else if ( (window.innerWidth > 480) && (window.innerWidth < 1280) ) {
        setMoviesArray(currentMoviesArray.slice(0,8))
        checkMoreButton(8)
      } else {
        setMoviesArray(currentMoviesArray.slice(0,12))
        checkMoreButton(12)
      }
    }
    
  }

  function checkMoreButton(lastArrayIndex) {
    const resSearchMoviesArray = JSON.parse(localStorage.getItem("resSearchMoviesArray"))
    if ((resSearchMoviesArray.length - lastArrayIndex) <= 0 ) setMoreButton(false)
  }

  function handleUpdateMovies() {
    const lastArrayIndex = moviesArray.length;

    if (window.innerWidth <= 480) {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 1))
      checkMoreButton(lastArrayIndex+1)
    } else if ( (window.innerWidth > 480) && (window.innerWidth < 1280) ) {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 2))
      checkMoreButton(lastArrayIndex + 1)
    } else {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 3))    
      checkMoreButton(lastArrayIndex + 3)
    }

  }

  function onKeywordSubmit(keyword) {
    setPreloaderActivity(true);
    
    setMoreButton(true)
    
    fetchData(keyword)
      .then((res) => {
        console.log(res)
        if(res.length === 0) setNotFoundTitle(true);
        setInitialMoviesArray(res)
        if (window.innerWidth <= 480) {
          setMoviesArray(res.slice(0,5))
          checkMoreButton(5)
        } else if ( (window.innerWidth > 480) && (window.innerWidth < 1280) ) {
          setMoviesArray(res.slice(0,8))
          checkMoreButton(8)
        } else {
          setMoviesArray(res.slice(0,12))
          checkMoreButton(12)
        }
      })
      .then(() => setPreloaderActivity(false))
      
      .catch(err => console.log(err));
    
    
  }


  return (
    <div className="app">
      
      <Switch>
        <Route exact path="/">
          <Main isLogged={false}/> 
        </Route>

        <Route path="/movies">
          <Movies 
          isLogged={true} 
          onKeywordSubmit={onKeywordSubmit} 
          isPreloaderIsActive={isPreloaderIsActive} 
          movies={moviesArray} 
          onMore={handleUpdateMovies} 
          moreButton={moreButton}
          notFoundTitle={notFoundTitle}
          checkMoviesLS={checkMoviesLS}

          />
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
