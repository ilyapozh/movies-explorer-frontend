import './moviesCard.css';
import imgPath from '../../images/moviesPics/pic8.svg'

function MoviesCard(props) {
    return ( 
        <li className="moviesCard">
            <img src={imgPath} alt="movieimg" className="moviesCard__img"/>
            <div className="moviesCard__container">
                <div className="moviesCard__name-cont">
                    <h3 className="moviesCard__name">FilmName</h3>
                    <button className="moviesCard__like" alt="like"/>
                </div>
                <p className="moviesCard__time">24:24</p>
            </div>
        </li>
     
    );
  }
  
  export default MoviesCard;