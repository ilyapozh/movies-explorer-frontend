import './App.css';
import React from 'react';
import Main from '../Main/Main';
import {Switch, Route} from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Account from '../Acount/Account';
import Login from '../Login/Login';
// import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { fetchData } from '../../utils/MoviesApi';
import {putMovieLike, fetchSavedMovies, deleteMovie} from '../../utils/MainApi';
import UseFormWithValidation from '../UseFormValidation/UseFormValidation';
import {checkLikedMovies} from '../../utils/keywordMoviesSearch'


function App() {
  const [moviesArray, setMoviesArray] = React.useState([]);
  const [initialMoviesArray, setInitialMoviesArray] = React.useState([]);
  const [isPreloaderIsActive, setPreloaderActivity] = React.useState(false);
  const [moreButton, setMoreButton] = React.useState(true);
  const [notFoundTitle, setNotFoundTitle] = React.useState(false);
  const [savedMoviesArray, setSavedMoviesArray] = React.useState([]);

  localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzOThlMTQxNzQ5ZjcxNWMxYTllZDQiLCJpYXQiOjE2MjUxNDAzODQsImV4cCI6MTYyNTc0NTE4NH0.4sKf72SH2q85vkq09Mgg1NoYN8b0RfLLQ9K46NDexGU")

  React.useEffect(() => {
    fetchSavedMovies()
    .then((res) => {
      const {data} = res;
      const currentMoviesArray = JSON.parse(localStorage.getItem('resSearchMoviesArray'));
      setSavedMoviesArray(data)
      return (checkLikedMovies(currentMoviesArray, data))
    })
    .then((arr) => {

      checkWindowRes(arr);

    })

  }, []);

  
  function checkWindowRes(currentMoviesArray) {
    
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
    
    fetchData(keyword, savedMoviesArray)
      .then((res) => {

        if(res.length === 0) setNotFoundTitle(true);
        
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


  function getMovieDataByName(movieName) {
    const movieArrayFull = JSON.parse(localStorage.getItem('movieArrayFull'));
  
    let movieData = {};
    
    movieArrayFull.forEach(element => {
      let str = element.nameRU.search(movieName);
      if (str !== -1) {
        movieData = Object.assign({}, element);
      }
    })

    return movieData
  }

  function getSavedMovieDataByName(movieName) {
    const movieData = {};
    
    savedMoviesArray.forEach( savedMovie => {
      
      if (savedMovie.nameRU.search(movieName) !== -1) {
        Object.assign(movieData, savedMovie)
        return
      }
    })

    return movieData
  }


  function handleMovieLike(movieName, likeStatus) {
    
    if (likeStatus) {
    putMovieLike(getMovieDataByName(movieName))
      .then(res => {
        
        const {data} = res;
        
        Object.assign(data, {isLiked: true})
        
        const savedArr = [...savedMoviesArray, data];
        
        const newSearchArr = moviesArray.map( movie => {
          
          if(movie.id === data.movieId) {
            Object.assign(movie, {isLiked: true})
          }
          return movie
        })

        setMoviesArray(newSearchArr)

        setSavedMoviesArray(savedArr)
        
      })
      .catch(err => console.log(err))

    } else {
      
      deleteMovie(getSavedMovieDataByName(movieName))
      .then((res) => {
        
        const newSearchArr = moviesArray.map( movie => {
          
          if(movie.id === res.data.movieId) {
            Object.assign(movie, {isLiked: false})
          }
          
          return movie

        })

        setMoviesArray(newSearchArr)

        let newSavedArr = [];

        savedMoviesArray.forEach( savedMovie => {
          
          if (savedMovie.movieId === res.data.movieId) {
            return
          } else {
            newSavedArr.push(savedMovie)
          }
          
        })
        
        setSavedMoviesArray(newSavedArr)
        
      })
      .catch(err => console.log(err))

    }
     
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
            onMovieLike={handleMovieLike}
            
          />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies 
            isLogged={true} 
            movies={savedMoviesArray}
            onDelete={handleMovieLike}
          />
        </Route>
        
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <UseFormWithValidation />
        </Route>

        <Route path="/">
          <NotFound />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
