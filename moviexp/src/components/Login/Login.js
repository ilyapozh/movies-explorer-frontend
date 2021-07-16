import './login.css';
import {Link} from 'react-router-dom';
import logoPath from '../../images/logo_header.svg';
import {useFormWithValidation} from '../UseFormValidation/UseFormValidation';
import React from "react";



function Login(props) {

    const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();
    
    const {handleLoginSubmit} = props;

    React.useEffect(() => {
        resetForm();
    }, [ resetForm])

    function onSubmit(e) {
        e.preventDefault();

        handleLoginSubmit(values);
    }

    return ( 
        <div className="login">
            <Link to="/"> 
                <img alt="logo" src={logoPath} className="login__logo"/>
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={onSubmit}>
                <div className="login__input-cont">

                    <label className="login__input-label" htmlFor="email-input">E-mail</label>
                    <input 
                        type="text" 
                        className="login__input" 
                        placeholder="E-mail" 
                        name="email"
                        onChange={handleChange}
                        value = {values.email || ''}
                        required
                    />
                    <span className="register__error" >
                        {errors.email || ''}
                    </span>

                    <label className="login__input-label" htmlFor="password-input">Пароль</label>
                    <input 
                        type="password" 
                        className="login__input" 
                        placeholder="Пароль" 
                        name="password"
                        onChange={handleChange} 
                        value = {values.password || ''}
                        required
                    />
                    <span className="register__error" >
                        {errors.password || ''}
                    </span>

                </div>
                <span className="register__error" >
                    {props.logErr}
                </span>
                <div className="login__but-container">
                    <button className= { isValid ? "login__submit-but" : ("login__submit-but login__submit-but_disabled") } disabled={!isValid}>Войти</button>
                    <p className="login__text">Eще не зарегестрированы?<Link className="login__login-link" to="/signup"> Зарегестрироваться</Link></p>
                </div>
            </form>
        </div>
    );
  }
  
  export default Login;