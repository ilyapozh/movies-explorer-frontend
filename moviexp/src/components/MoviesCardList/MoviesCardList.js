import './moviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return (
        <div className="moviesCardList"> 
            <ul className="moviesCardList__list">
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
                <MoviesCard isPrivate={props.isPrivate}/>
            </ul>
            {
                !(props.isPrivate) &&
                <button className="moviesCardList__more-button">Еще</button>
            }
        </div>
     
    );
  }
  
  export default MoviesCardList;