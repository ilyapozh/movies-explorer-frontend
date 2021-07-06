import './account.css';
import Header from '../Header/Header';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../UseFormValidation/UseFormValidation';

function Account(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

    const {handleAccountSubmit, handleExit} = props;

    function onExit() {
        handleExit();
    }

    function onSubmit(e) {
        e.preventDefault();

        handleAccountSubmit(values);
    }

    return ( 
        <div className="account">
            <Header isLogged={true}/>
            <div className="account__form-container">
                <h1 className="account__title">Привет, {currentUser.name}!</h1>
                <form className="account__form" onSubmit={onSubmit}>
                    <div className="account__input-container">
                        <div className="account__name-cont">
                            <label htmlFor="name-input" className="account__name">Имя</label>
                            <input 
                                className="account__name-input" 
                                type="text" 
                                placeholder={currentUser.name} 
                                name="name"
                                onChange={handleChange}
                                value = {values.name || ''}
                                required
                            />
                            
                        </div>
                        <span className="register__error" >
                            {errors.name || ''}
                        </span>
                        <div className="account__email-cont">
                            <label htmlFor="email-input" className="account__email">Email</label>
                            <input 
                                className="account__email-input" 
                                type="text" 
                                placeholder={currentUser.email} 
                                name="email"
                                onChange={handleChange}
                                value = {values.email || ''}
                                required
                            />
                        </div>
                        <span className="register__error" >
                            {errors.email || ''}
                        </span>
                    </div>

                    <div className="account__but-cont">
                        <button className = { isValid ? "account__submit-but" : ("account__submit-but account__submit-but_disabled") } type="submit" disabled={!isValid}>Редактировать</button>
                        <button className="account__exit-but" type="button" onClick={onExit}>Выйти из аккаунта</button>
                    </div>

                    <span className="register__error" >
                        {props.accMsg}
                    </span>
                </form>
            </div>
        </div>
    );
  }
  
  export default Account;