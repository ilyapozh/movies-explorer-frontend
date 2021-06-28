import './promo.css';
import Header from '../Header/Header';

function Promo(props) {
    return ( 
        <div className="promo">
            <Header isLogged={props.isLogged}/>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
     
    );
  }
  
  export default Promo;