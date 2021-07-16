import './register.css';
import {useFormWithValidation} from '../UseFormValidation/UseFormValidation';
import React from "react"
import {Link} from 'react-router-dom'
import logoPath from '../../images/logo_header.svg'

function Register(props) {
    
    const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

    const {handleRegisterSubmit} = props;

    React.useEffect(() => {
        resetForm();
    }, [ resetForm])


    function onSubmit(e) {
        e.preventDefault();

        handleRegisterSubmit(values);
    }

    return ( 
        <div className="register">
            <Link to="/"> 
                <img alt="logo" src={logoPath} className="register__logo"/>
            </Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={onSubmit}>
                <div className="register__input-cont">

                    <label className="register__input-label" htmlFor="name-input">Имя</label>
                    <input 
                        type="text" 
                        className="register__input" 
                        placeholder="Имя" 
                        name="name" 
                        onChange={handleChange}
                        value = {values.name || ''}
                        required
                    />
                    <span className="register__error" >
                        {errors.name || ''}
                    </span>

                    <label className="register__input-label" htmlFor="email-input">E-mail</label>
                    <input 
                        type="text" 
                        className="register__input" 
                        placeholder="E-mail" 
                        name="email" 
                        onChange={handleChange}
                        value = {values.email || ''}
                        required
                    />
                    <span className="register__error" >
                        {errors.email || ''}
                    </span>

                    <label className="register__input-label" htmlFor="password-input">Пароль</label>
                    <input 
                        type="password" 
                        className="register__input" 
                        placeholder="Пароль" 
                        required
                        name="password" 
                        onChange={handleChange} 
                        value = {values.password || ''}
                    />
                    <span className="register__error" >
                        {errors.password || ''}
                    </span>

                </div>
                
                <span className="register__error" >
                        {props.regErr}
                </span>

                <div className="register__but-container">
                    <button className= { isValid ? "register__submit-but" : ("register__submit-but register__submit-but_disabled") } disabled={!isValid}>Зарегестрироваться</button>
                    <p className="register__text">Уже зарегестрированы?<Link className="register__register-link" to="/login"> Войти </Link></p>
                </div>
            </form>
            
        </div>
    );
  }
  
  export default Register;