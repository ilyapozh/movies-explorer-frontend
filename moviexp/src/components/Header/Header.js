import Navigation from '../Navigation/Navigation';
import logoPath from '../../images/logo_header.svg';
import './header.css'
import {Link} from 'react-router-dom';


function Header(props) {
    return (
        <header className="header"> 
            <div className="header__logo-container">
                <img src={logoPath} alt="logo" className="header__logo"/>
                {props.isLogged && <Navigation />}
            </div>     
            {props.isLogged ? 
                <button className="header__button-acc"> Аккаунт </button> : 
                <div className="header__link-container">
                    <Link to="" className="header__link header__link__auth_login">Регистрация</Link>
                    <Link to="" className="header__link header__link__auth_login">Войти</Link>
                </div>
            }
        </header>
    );
  }
  
  export default Header;