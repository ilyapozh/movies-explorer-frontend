import {convertMoviesDuration} from './MoviesApi';

function setMovieDataBack(movieData) {
    return({
        "country": (movieData.country || 'country'),
        "director": (movieData.director || 'director'),
        "duration": (movieData.duration || 123),
        "year": (movieData.year || 'director'),
        "description": (movieData.description || 'director'),
        "image": (`https://api.nomoreparties.co${movieData.image.url}` || 'director'),
        "trailer": (movieData.trailerLink || 'director'),
        "thumbnail": (`https://api.nomoreparties.co${movieData.image.url}` || 'director'),
        "movieId": (movieData.id || 'director'),
        "nameRU": (movieData.nameRU || 'director'),
        "nameEN": (movieData.nameEN || 'director')
    })
}


function putMovieLike(movieData) {
    const token = localStorage.getItem('token');
    
    if (token) {
    return fetch(`http://localhost:3005/movies`, {
                method: 'POST',
                // credentials: 'include',
                // mode:'no-cors',
                headers: {
                    "Content-Type": 'application/json',
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(setMovieDataBack(movieData))
            })
            .then((res) => {
                
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
        } else console.log('NoToken')
            
}

function deleteMovie(movieData) {
    const token = localStorage.getItem('token');
    
    if (token) {
    return fetch(`http://localhost:3005/movies/${movieData._id}`, {
                method: 'DELETE',
                
                headers: {
                    "Content-Type": 'application/json',
                    "authorization": `Bearer ${token}`
                },
                
            })
            .then((res) => {
                
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
        } else console.log('NoToken')
}

function fetchSavedMovies() {
    const token = localStorage.getItem('token');

    if (token) {
        return fetch(`http://localhost:3005/movies`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "authorization": `Bearer ${token}`
                }
            })
            .then((res) => {
                    
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
            
    }
    
    return
}

function createUser(userData) {
    return fetch(`http://localhost:3005/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(userData)
            })
            .then((res) => {
                    
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
}

function login(data) {
    return fetch(`http://localhost:3005/signin`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                    
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
        })
}

function getUserInfo() {
    const token = localStorage.getItem('token');

    return fetch(`http://localhost:3005/users/me`, {
                method: 'GET',
                headers: {
                    "authorization": `Bearer ${token}`
                },
            })
            .then((res) => {
                    
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
}

function updateUserInfo(data) {
    const token = localStorage.getItem('token');
    
    return fetch(`http://localhost:3005/users/me`, {
                method: 'PATCH',
                headers: {
                    "authorization": `Bearer ${token}`,
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                    
                if (res.ok) {

                    return res.json();
                }
                return Promise.reject(res.status)
            })
}

export {
    putMovieLike, 
    fetchSavedMovies, 
    deleteMovie, 
    createUser, 
    login, 
    getUserInfo,
    updateUserInfo
}