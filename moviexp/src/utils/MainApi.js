function setMovieDataBack(movieData) {
    return({
        "country": movieData.country,
        "director": movieData.director,
        "duration": movieData.duration,
        "year": movieData.year,
        "description": movieData.description,
        "image": `https://api.nomoreparties.co${movieData.image.url}`,
        "trailer": movieData.trailerLink,
        "thumbnail": `https://api.nomoreparties.co${movieData.image.url}`,
        "movieId": movieData.id,
        "nameRU": movieData.nameRU,
        "nameEN": movieData.nameEN
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

export {putMovieLike, fetchSavedMovies, deleteMovie}