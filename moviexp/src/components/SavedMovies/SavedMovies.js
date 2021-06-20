import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './savedMovies.css';


function SavedMovies() {
    return ( 
        <div className="savedMovies">
            <Header isLogged={true} />
            <SearchForm />
            <SavedMovies />
        </div>
     
    );
  }
  
  export default SavedMovies;