import './moviesCard.css';
// import imgPath from '../../images/moviesPics/pic8.svg';


function onLikeClick(evt) {
    const curLike = evt.target;
    curLike.classList.toggle("moviesCard__like__color_pink")
}

function onDeleteClick(evt) {
    evt.target.closest(".moviesCard").remove()

}


function MoviesCard(props) {
    return ( 
        <li className="moviesCard">
            <img src={`https://api.nomoreparties.co${props.imgPath}`} alt="movieimg" className="moviesCard__img"/>
            <div className="moviesCard__container">
                <div className="moviesCard__name-cont">
                    <h3 className="moviesCard__name">{props.movieName}</h3>
                    { props.isPrivate ? 
                        <button type="button" className="moviesCard__delete" alt="like" onClick={onDeleteClick}/> :
                        <button type="button" className="moviesCard__like" alt="like" onClick={onLikeClick}/>
                    }
                </div>
                <p className="moviesCard__time">{props.duration}</p>
            </div>
        </li>
    );
  }
  
export default MoviesCard;