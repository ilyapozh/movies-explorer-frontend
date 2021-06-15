import './navtab.css'
import {Link} from 'react-router-dom';

function NavTab(props) {
    return (
        <div className="navtab">
            <nav className="navtab__container"> 
                <Link to="" className="navtab__link">О проекте</Link>
                <Link to="" className="navtab__link">Технологии</Link>
                <Link to="" className="navtab__link">Студент</Link>
            </nav>
        </div>
    );
  }
  
  export default NavTab;