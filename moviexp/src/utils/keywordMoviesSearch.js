const checkLikedMovies = (moviesArray, savedMoviesArray) => {
    if (moviesArray === null) return []
    const likedMoviesArr = moviesArray.map( movie => {
        Object.assign(movie, {isLiked: false})
        savedMoviesArray.forEach( savedMovie => {
            if (savedMovie.movieId === movie.id) {
                return Object.assign(movie, {isLiked: true})
            } 
        })
        return movie
    })

    return likedMoviesArr
    
}

const keywordMoviesSearch = (keyword, savedMoviesArray) => {
    
    const searchParams = ["nameRU", "nameEN", "director", "country", "year"];
    
    const movieArrayFull = JSON.parse(localStorage.getItem('movieArrayFull'));
    
    const resultMoviesArray = [];
    
    movieArrayFull.forEach(element => {
        searchParams.forEach(param => {
            if (element[param] === null) {
                return
            }
            if (( (element[param]).toLowerCase() ).search(keyword.toLowerCase()) !== -1) {
                resultMoviesArray.push(element) 
            }  
        });
    });

    let checkedLikedMovieArr = checkLikedMovies(resultMoviesArray, savedMoviesArray);
    
    

    return checkedLikedMovieArr;

}

const keywordSavedMoviesSearch = (keyword, savedMoviesArray) => {

    const searchParams = ["nameRU", "nameEN", "director", "country", "year"];

    const resultMoviesArray = [];

    savedMoviesArray.forEach(element => {
        searchParams.forEach(param => {
            if (element[param] === null) {
                return
            }
            if (( (element[param]).toLowerCase() ).search(keyword.toLowerCase()) !== -1) {
                resultMoviesArray.push(element) 
            }  
        });
    });

    return resultMoviesArray;
}


export {keywordMoviesSearch, checkLikedMovies, keywordSavedMoviesSearch}