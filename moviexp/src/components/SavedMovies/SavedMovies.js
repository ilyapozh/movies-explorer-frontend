import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './savedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
    return ( 
        <div className="savedMovies">
            <Header isLogged={true} />
            <SearchForm />
            <MoviesCardList isPrivate={true}/>
            <Footer />
        </div>
    );
  }
  
  export default SavedMovies;