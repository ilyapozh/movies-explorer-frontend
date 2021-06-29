import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';


function MoviesCardList(props) {

    // const [initialMoviesArray, setInitialMoviesArray] = React.useState([]);
    
    // const {checkMoviesLS} = props;
    
    function callbackUseEffect(props) {
        console.log(props)
        const {checkMoviesLS} = props;
        return checkMoviesLS
    }

    React.useEffect(() => {
        const checkMoviesLS = callbackUseEffect(props);
        checkMoviesLS();
    }, [])



    function handleMoreClick() {
        props.onMore()
    }


    return (
        <div className="moviesCardList"> 
            {(props.notFoundTitle === true) && <h1>Ничего не найдено</h1>}
            <ul className="moviesCardList__list">
                { 
                    (props.movies).map( (movie, index) => {
                            return <MoviesCard 
                                        key={index} 
                                        movieName={movie.nameRU} 
                                        duration={movie.duration} 
                                        imgPath={movie.image.url}
                            />
                        }
                    )
                }
            </ul>
                {
                    (!(props.isPrivate) && (props.movies.length !== 0) && (props.moreButton)) &&
                    <button className="moviesCardList__more-button" onClick={handleMoreClick} >Еще</button> 
                    
                }
        </div>
     
    );
  }
  
  export default MoviesCardList;