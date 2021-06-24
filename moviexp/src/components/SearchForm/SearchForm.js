import './searchForm.css';


function SearchForm() {
    return ( 
        <div className="searchForm">
            <form className="searchForm__form" >
                <div className="searchForm__input-container">
                    <input className="searchForm__input" placeholder="Фильмы" required/>
                    <button type="submit" className="searchForm__submit-button" />
                </div>
            </form>
            <div className="searchForm__check-box-container">
                <label className="searchForm__form-switch">
                    <input type="checkbox" />
                    <i className="searchForm__box"></i>
                    <label className="searchForm__label">Короткометражки</label>
                </label>
            </div>
        </div>
    );
  }
  
  export default SearchForm;