import './register.css';
// import {useFormWithValidation} from '../FormValidation/FormValidation';
import React, { useCallback } from "react"
import {Link} from 'react-router-dom'
import logoPath from '../../images/logo_header.svg'

function Register(props) {
    return ( 
        <div className="register">
            <Link to="/"> 
                <img alt="logo" src={logoPath} className="register__logo"/>
            </Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <div className="register__input-cont">
                    <label className="register__input-label" htmlFor="name-input">Имя</label>
                    <input type="text" className="register__input" placeholder="Имя" name="name-input" onChange={props.handleChange}/>
                    <label className="register__input-label" htmlFor="email-input">E-mail</label>
                    <input type="text" className="register__input" placeholder="E-mail" name="email-input"/>
                    <label className="register__input-label" htmlFor="password-input">Пароль</label>
                    <input type="text" className="register__input" placeholder="Пароль" name="password-input"/>
                    <span className="register__error"></span>
                </div>
                <div className="register__but-container">
                    <button className="register__submit-but">Зарегестрироваться</button>
                    <p className="register__text">Уже зарегестрированы?<Link className="register__register-link" to="/login"> Войти </Link></p>
                </div>
            </form>
            
        </div>
    );
  }
  
  export default Register;