import './login.css';
import {Link} from 'react-router-dom'
import logoPath from '../../images/logo_header.svg'

function Login(props) {
    return ( 
        <div className="login">
            <Link to="/"> 
                <img alt="logo" src={logoPath} className="login__logo"/>
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
                <div className="login__input-cont">
                    <label className="login__input-label" htmlFor="email-input">E-mail</label>
                    <input type="text" className="login__input" placeholder="E-mail" name="email-input"/>
                    <label className="login__input-label" htmlFor="password-input">Пароль</label>
                    <input type="text" className="login__input" placeholder="Пароль" name="password-input"/>
                </div>
                <div className="login__but-container">
                    <button className="login__submit-but">Войти </button>
                    <p className="login__text">Eще не зарегестрированы?<Link className="login__login-link" to="/signup"> Зарегестрироваться</Link></p>
                </div>
            </form>
        </div>
    );
  }
  
  export default Login;