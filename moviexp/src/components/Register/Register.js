import './register.css';
import {Link} from 'react-router-dom'
import logoPath from '../../images/logo_header.svg'

function Register(props) {
    return ( 
        <div className="register">
            <Link to="/"> 
                <img alt="logo" src={logoPath} className="register__logo"/>
            </Link>
            <h1 className="register__title">Рады видеть!</h1>
            <form className="register__form">
                <div className="register__input-cont">
                    
                    <label className="register__input-label" for="email-input">E-mail</label>
                    <input type="text" className="register__input" placeholder="E-mail" name="email-input"/>
                    <label className="register__input-label" for="password-input">Пароль</label>
                    <input type="text" className="register__input" placeholder="Пароль" name="password-input"/>
                </div>
                <div className="register__but-container">
                    <button className="register__submit-but">Войти </button>
                    <p className="register__text">Eще не зарегестрированы?<Link className="register__register-link"> Зарегестрироваться</Link></p>
                </div>
            </form>
        </div>
    );
  }
  
  export default Register;