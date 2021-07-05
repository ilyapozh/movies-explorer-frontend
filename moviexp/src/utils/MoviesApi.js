import {keywordMoviesSearch} from '../utils/keywordMoviesSearch';

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
        
}

export {fetchData}