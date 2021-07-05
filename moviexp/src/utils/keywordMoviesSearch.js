const checkLikedMovies = (moviesArray, savedMoviesArray) => {

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
            if (( (element[param]).toLowerCase() ).search(keyword) !== -1) {
                resultMoviesArray.push(element) 
            }  
        });
    });

    let checkedLikedMovieArr = checkLikedMovies(resultMoviesArray, savedMoviesArray);
    
    localStorage.setItem("resSearchMoviesArray", JSON.stringify(checkedLikedMovieArr));

    return checkedLikedMovieArr;

}


export {keywordMoviesSearch, checkLikedMovies}