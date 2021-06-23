import Navigation from '../Navigation/Navigation';
import logoPath from '../../images/logo_header.svg';
import './header.css'
import {Link} from 'react-router-dom';


function onMenuClick() {
    const menuElement = document.querySelector('.header__menu-overlay')
    const checkBox = document.querySelector('.searchForm__check-box-container')
    checkBox.classList.add('searchForm__check-box-container_disable')
    menuElement.classList.add('header__menu_opened')
}

function onCloseMenu() {
    const menuElement = document.querySelector('.header__menu-overlay')
    const checkBox = document.querySelector('.searchForm__check-box-container')
    menuElement.classList.remove('header__menu_opened')
    checkBox.classList.remove('searchForm__check-box-container_disable')
}

function Header(props) {
    return (
        <header className="header"> 
            <div className="header__logo-container">
                <Link to="/">
                    <img src={logoPath} alt="logo" className="header__logo"/>
                </Link>
                {props.isLogged && <Navigation />}
            </div>     
            {props.isLogged ? 
                (<>    
                    <Link to="/account" className="header__button-acc"> Аккаунт </Link>
                    <button type="button" className="header__button-menu" onClick={onMenuClick}/>
                </>) : 
                <div className="header__link-container">
                    <Link to="/register" className="header__link">Регистрация</Link>
                    <Link to="/login" className="header__link">Войти</Link>
                </div>
            }
            <div className="header__menu-overlay">
            <div className="header__menu">
                <button type="button" className="header__menu-close-but" onClick={onCloseMenu}/>
                <div className="header__menu-link-cont">
                    <div className="header__bottom-cont">
                        <Link to="/" className="header__menu-link">Главная</Link>
                        <Link to="/movies" className="header__menu-link">Фильмы</Link>
                        <Link to="/saved-movies" className="header__menu-link">Сохраненные фильмы</Link>
                    </div>
                    <Link to="/account" className="header__button-acc-menu"> Аккаунт </Link>
                </div>
            </div>
            </div>
        </header>
    );
  }
  
  export default Header;