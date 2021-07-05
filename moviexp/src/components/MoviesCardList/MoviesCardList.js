import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';


function MoviesCardList(props) {
    
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
                                        isPrivate={props.isPrivate}
                                        key={index}
                                        isLiked={movie.isLiked} 
                                        movieName={movie.nameRU} 
                                        duration={movie.duration} 
                                        imgPath= {
                                            props.isPrivate ? (movie.image).replace('https://api.nomoreparties.co', '') :
                                            (movie.image.url)
                                        }
                                        onMovieLike={props.onMovieLike}
                                        onDelete={props.onDelete}
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