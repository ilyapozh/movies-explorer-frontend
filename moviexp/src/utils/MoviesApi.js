import {keywordMoviesSearch} from '../utils/keywordMoviesSearch';

const convertMoviesDuration = (checkedLikedMovieArr) => {
    if (checkedLikedMovieArr === null) return []
    const convertedMovArr = checkedLikedMovieArr.map( movie => {
        const hours = (movie.duration)/60; 
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours)*60;
        const rminutes = Math.round(minutes);
        let duration = `${rhours}ч ${rminutes}м`;

        return Object.assign(movie, {duration: duration})
    })

    return convertedMovArr
}

function fetchData(keyword, savedMoviesArray) {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {})
        .then(res => {
            if (res.ok) {     
                return res.json();
            }
            return Promise.reject(res.status)
        })
        .then((res) => {
            const resultArray = JSON.stringify(res);
            localStorage.setItem('movieArrayFull', resultArray); 
        })
        .then((res) => {
            const loweredKeyword = keyword.toLowerCase();
            const resultArray = keywordMoviesSearch(loweredKeyword, savedMoviesArray);
            return resultArray
        })
        .then((res) => {
            localStorage.setItem("resSearchMoviesArray", JSON.stringify(res));
            return res
        })
        
}

export {fetchData, convertMoviesDuration}