import './searchForm.css';


function SearchForm() {
    return ( 
        <div className="searchForm">
            <form className="searchForm__form">
                <div className="searchForm__input-container">
                    <input className="searchForm__input" placeholder="Фильмы"/>
                    <button type="submit" className="searchForm__submit-button" />
                </div>
            </form>
            <div className="searchForm__check-box-container">
                <input type="checkbox" className="searchForm__checkbox" name="shortFilm"/>
                <label for="shortFilm" className="searchForm__label">Короткометражки</label>
            </div>
        </div>
     
    );
  }
  
  export default SearchForm;