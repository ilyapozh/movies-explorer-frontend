import './main.css'
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

function Main(props) {
    return ( 
        <main className="main">
            <Promo isLogged={props.isLogged} />
            <NavTab />
            <AboutProject />
        </main>
    );
  }
  
  export default Main;