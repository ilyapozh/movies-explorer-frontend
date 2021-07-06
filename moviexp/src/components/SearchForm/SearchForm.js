import React from 'react';
import './searchForm.css';
// import {fetchData} from '../../utils/MoviesApi';

function SearchForm(props) {

    const [keyword, setKeyword] = React.useState('');
    const [checkBoxState, setCheckBoxState] = React.useState(false)

    function handleInputChange(evt) {
        setKeyword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onKeywordSubmit(keyword);
    }

    const handleCheckBoxSubmit = ({target: {checked}}) => {
        props.onCheckBox(checked)
        setCheckBoxState(checked)
    }

    return ( 
        <div className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit}>
                <div className="searchForm__input-container">
                    <input className="searchForm__input" placeholder="Фильмы" onChange={handleInputChange} required/>
                    <button type="submit" className="searchForm__submit-button" />
                </div>
            </form>
            <div className="searchForm__check-box-container">
                <label className="searchForm__form-switch">
                    <input type="checkbox" checked={checkBoxState} onChange={handleCheckBoxSubmit}/>
                    <i className="searchForm__box"></i>
                    <label className="searchForm__label">Короткометражки</label>
                </label>
            </div>
        </div>
    );
  }
  
  export default SearchForm;