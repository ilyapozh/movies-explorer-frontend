import './moviesCard.css';
import React from 'react';

function MoviesCard(props) {
    const [duration, setDuration] = React.useState('');

    React.useEffect(() => {
        const hours = (props.duration)/60; 
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours)*60;
        const rminutes = Math.round(minutes);
        let duration = `${rhours}ч ${rminutes}м`;

        setDuration(duration);
    })

    function onLikeClick(evt) {
        const curLike = evt.target;
        
        curLike.classList.toggle("moviesCard__like__color_pink");

        const likedMovie = evt.target.closest(".moviesCard");

        const likedMovieName = likedMovie.querySelector(".moviesCard__name").innerText;
        
        props.onMovieLike(likedMovieName, curLike.classList.contains("moviesCard__like__color_pink"))

    }
    
    function onDeleteClick(evt) {
        const likedMovie = evt.target.closest(".moviesCard");

        const likedMovieName = likedMovie.querySelector(".moviesCard__name").innerText;

        props.onDelete(likedMovieName, false)
    }  

    return ( 
        <li className="moviesCard">
            <img src={`https://api.nomoreparties.co${props.imgPath}`} alt="movieimg" className="moviesCard__img"/>
            <div className="moviesCard__container">
                <div className="moviesCard__name-cont">
                    <h3 className="moviesCard__name" id="movie-name">{props.movieName}</h3>
                    { props.isPrivate ? 
                        <button type="button" className="moviesCard__delete" alt="like" onClick={onDeleteClick}/> :
                        <button type="button" className={props.isLiked ? "moviesCard__like moviesCard__like__color_pink" : "moviesCard__like"} alt="like" onClick={onLikeClick}/>
                    }
                </div>
                <p className="moviesCard__time">{duration || props.duration}</p>
            </div>
        </li>
    );
  }
  
export default MoviesCard;