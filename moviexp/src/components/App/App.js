import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';
import Main from '../Main/Main';
import {Switch, Route, useHistory} from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Account from '../Acount/Account';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { fetchData } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  putMovieLike, 
  fetchSavedMovies, 
  deleteMovie, 
  createUser, 
  login,
  getUserInfo,
  updateUserInfo
} from '../../utils/MainApi';
import {
  checkLikedMovies, 
  keywordMoviesSearch, 
  keywordSavedMoviesSearch
} from '../../utils/keywordMoviesSearch'


function App() {
  let history = useHistory();
  const [moviesArray, setMoviesArray] = React.useState([]);
  const [initialMoviesArray, setInitialMoviesArray] = React.useState([]);
  // const [isPreloaderIsActive, setPreloaderActivity] = React.useState(false);
  const [moreButton, setMoreButton] = React.useState(true);
  const [notFoundTitle, setNotFoundTitle] = React.useState(false);
  const [savedMoviesArray, setSavedMoviesArray] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({name: "Jack"});
  const [isLogged, setIsLogged] = React.useState(false);
  const [registerError, setRegisterError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [accMsg, setAccMsg] = React.useState('');

  
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
      getUserInfo()
        .then( ({currentUserInfo}) => {
          setCurrentUser(currentUserInfo)
          history.push('/movies')
        })
        .catch(err => console.log(err))
    
    }
  }, [history]);

  
  React.useEffect(() => {
    
    if (isLogged) {
      
      fetchSavedMovies()
        .then((res) => {
          const {data} = res;
          const currentMoviesArray = JSON.parse(localStorage.getItem('resSearchMoviesArray'));
          setSavedMoviesArray(data)
          return (checkLikedMovies(currentMoviesArray, data))
        })
        .then((arr) => {
          checkWindowRes(arr);
          history.push('/movies')
        })
        .catch((err) => console.log(err))
    }

  }, [isLogged]);


 
  function checkWindowRes(currentMoviesArray) {
    if (currentMoviesArray === null) return
    if (currentMoviesArray) {
      setInitialMoviesArray(currentMoviesArray)
      if (window.innerWidth <= 480) {
        setMoviesArray(currentMoviesArray.slice(0,5))
        checkMoreButton(5, currentMoviesArray)
      } else if ( (window.innerWidth > 480) && (window.innerWidth < 1280) ) {
        setMoviesArray(currentMoviesArray.slice(0,8))
        checkMoreButton(8, currentMoviesArray)
      } else {
        setMoviesArray(currentMoviesArray.slice(0,12))
        checkMoreButton(12, currentMoviesArray)
      }
    }
  }

  function checkMoreButton(lastArrayIndex, moviesArr) {
    console.log(moviesArr.length)
    console.log(lastArrayIndex)
    setMoreButton(true)
    // setPreloaderActivity(false)
    if (moviesArr === null || moviesArr === undefined) return 
    if ((moviesArr.length - lastArrayIndex) <= 0 ) {
      setMoreButton(false)
      
    }
  }

  function handleUpdateMovies() {
    const lastArrayIndex = moviesArray.length;

    if (window.innerWidth <= 480) {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 1))
      checkMoreButton(lastArrayIndex+1, moviesArray)

    } else if ( (window.innerWidth > 480) && (window.innerWidth < 1280) ) {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 2))
      checkMoreButton(lastArrayIndex + 1, moviesArray)
    } else {
      
      setMoviesArray(initialMoviesArray.slice(0, lastArrayIndex + 3))    
      checkMoreButton(lastArrayIndex + 3, moviesArray)
    }
    
  }

  function onKeywordSubmit(keyword) {
    // setPreloaderActivity(true);
    const fullMoviesArray = JSON.parse(localStorage.getItem('movieArrayFull'));
    
    if (!fullMoviesArray) {
      
      // setPreloaderActivity(true);
      setMoreButton(true);
    
      fetchData(keyword, savedMoviesArray)
        .then((res) => {
          // setPreloaderActivity(true)
          if(res.length === 0) setNotFoundTitle(true);
  
          checkWindowRes(res)
          
        })
        .then((res) => {
          
          // setPreloaderActivity(false)
        })
        
        .catch(err => console.log(err));
    } else {
     
      const newMovArr = keywordMoviesSearch(keyword, savedMoviesArray);
      checkWindowRes(newMovArr);
      localStorage.setItem('resSearchMoviesArray', JSON.stringify(newMovArr))
      
    }
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



  function handleRegisterSubmit(data) {
    createUser(data)
      .then(() => {
        handleLoginSubmit({
          email: data.email,
          password: data.password,
        })
      })
      .catch((err) => {
        setRegisterError(`Что-то пошло не так... ${err}`)
        console.log(err)
      })
  }



  function handleCheckBox(checked) {
    
    if (checked) {
      let newMovArr = [];
      let savedNewArr = [];
      
      moviesArray.forEach(movie => {
        if (movie.duration <= 40) {
          newMovArr.push(movie)
        }
      })

      savedMoviesArray.forEach(svdMovie => {
        if (svdMovie.duration <= 40) {
          savedNewArr.push(svdMovie)
        }
      })

      setMoviesArray(newMovArr);
      setSavedMoviesArray(savedNewArr);

    } else {
      fetchSavedMovies()
        .then((res) => {
          const {data} = res;
          setSavedMoviesArray(data)
        })
        .then(() => {
          checkWindowRes(initialMoviesArray)
        })
        .catch( (err) => console.log(err))
    }  
  }

  
  function handleLoginSubmit(data) {
    login(data)
      .then(({token}) => {
        localStorage.setItem('token', token)
        setIsLogged(true);
        history.push('/movies')
      })
      .then(() => {
        getUserInfo()
          .then( ({currentUserInfo}) => {
            setCurrentUser(currentUserInfo)
          })
      })
      .catch((err) => {
        setLoginError(`Что-то пошло не так... ${err}`)
      })
  }

  function handleAccountSubmit(data) {
    updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res.data)
        history.push('/movies')
      })
      .catch((err) => {
        
        setAccMsg(`Что-то пошло не так... ${err}`)
      })
  }

  function handleExit() {
    localStorage.removeItem('token');
    localStorage.removeItem('resSearchMoviesArray');
    
    setIsLogged(false);
    history.push('/');
  }

  function handleSavedMoviesSearch(keyword) {
    const resSavedMovieSearch = keywordSavedMoviesSearch(keyword, savedMoviesArray);
    setSavedMoviesArray(resSavedMovieSearch);
  }


  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser} >
        <Switch>

          <Route exact path="/"> 
            <Main 
              isLogged={isLogged} >
            </Main>
          </Route>
          
          <ProtectedRoute 
            path="/movies"
            component = {Movies}
            isLogged ={isLogged} 
            onKeywordSubmit={onKeywordSubmit} 
            // isPreloaderIsActive={isPreloaderIsActive} 
            movies={moviesArray} 
            onMore={handleUpdateMovies} 
            moreButton={moreButton}
            notFoundTitle={notFoundTitle}
            onMovieLike={handleMovieLike}
            onCheckBox={handleCheckBox}
            >
          </ProtectedRoute>

          <ProtectedRoute 
            path = "/saved-movies"
            component = {SavedMovies}
            isLogged = {isLogged} 
            movies = {savedMoviesArray}
            onDelete = {handleMovieLike}
            onCheckBox= {handleCheckBox}
            onKeywordSubmit = {handleSavedMoviesSearch}
            >
          </ProtectedRoute>

          <ProtectedRoute 
            path = "/account"
            component = {Account}
            isLogged = {isLogged} 
            handleAccountSubmit = {handleAccountSubmit}
            handleExit = {handleExit}
            accMsg = {accMsg}
            >
          </ProtectedRoute>
          
          <Route path="/account">
            <Account />
          </Route>

          <Route path="/login">
            <Login 
              handleLoginSubmit={handleLoginSubmit}
              logErr = {loginError}
            />
          </Route>

          <Route path="/signup">
            <Register 
              handleRegisterSubmit={handleRegisterSubmit}
              regErr = {registerError}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
