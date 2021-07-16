import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './savedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies(props) {


    return ( 
        <div className="savedMovies">
            <Header isLogged={true} />
            <SearchForm 
                onCheckBox={props.onCheckBox}
                onKeywordSubmit={props.onKeywordSubmit}
            />
            <MoviesCardList 
                isPrivate={true}
                movies={props.movies} 
                onDelete={props.onDelete}
                
            />
            <Footer />
        </div>
    );
  }
  
  export default SavedMovies;