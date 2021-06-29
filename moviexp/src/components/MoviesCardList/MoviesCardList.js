import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return (
        <div className="moviesCardList"> 
            <ul className="moviesCardList__list">
                {
                    (props.movies).map( movie => 
                        <MoviesCard key={movie.id} movieName={movie.nameRU} duration={movie.duration} imgPath={movie.image.url}/>
                    )
                }
            </ul>
            {
                !(props.isPrivate) &&
                <button className="moviesCardList__more-button">Еще</button>
            }
        </div>
     
    );
  }
  
  export default MoviesCardList;