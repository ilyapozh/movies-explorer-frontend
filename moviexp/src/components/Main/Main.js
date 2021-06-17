import './main.css'
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
    return ( 
        <main className="main">
            <Promo isLogged={props.isLogged} />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </main>
    );
  }
  
  export default Main;