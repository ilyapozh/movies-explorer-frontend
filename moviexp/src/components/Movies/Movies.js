import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
    
    return ( 
        <div className="movies">
            <Header isLogged={props.isLogged} />
            <SearchForm onKeywordSubmit={props.onKeywordSubmit}/>
            <Preloader isPreloaderIsActive={props.isPreloaderIsActive}/>
            <MoviesCardList 
                isPrivate={false} 
                movies={props.movies} 
                onMore={props.onMore} 
                moreButton={props.moreButton}
                notFoundTitle={props.notFoundTitle}
                checkMoviesLS={props.checkMoviesLS}
            />
            <Footer />
        </div>
    );
  }
  
  export default Movies;