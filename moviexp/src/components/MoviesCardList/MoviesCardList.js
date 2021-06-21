import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return (
        <div className="moviesCardList"> 
            <ul className="moviesCardList__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            {
                !(props.isPrivate) &&
                <button className="moviesCardList__more-button">Еще</button>
            }
        </div>
     
    );
  }
  
  export default MoviesCardList;