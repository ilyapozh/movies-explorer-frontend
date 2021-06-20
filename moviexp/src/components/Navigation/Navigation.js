import './navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {
    return ( 
        <div className="navigation">
            <Link to="" className="navigation__link">Фильмы</Link>
            <Link to="" className="navigation__link">Сохраненные фильмы</Link>
        </div>
    );
}
  
  export default Navigation;