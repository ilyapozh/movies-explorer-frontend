import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import './movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
    return ( 
        <div className="movies">
            <Header isLogged={props.isLogged} />
            <SearchForm />
            <MoviesCardList isPrivate={false}/>
            <Footer />
        </div>
    );
  }
  
  export default Movies;