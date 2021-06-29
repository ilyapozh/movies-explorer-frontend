// function forEachLoop(keyword) {
    

// }

const keywordMoviesSearch = (keyword) => {
    
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

    
    localStorage.setItem("resSearchMoviesArray", JSON.stringify(resultMoviesArray))
    return resultMoviesArray;
}


export {keywordMoviesSearch}