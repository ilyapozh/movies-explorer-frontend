import './account.css';
import Header from '../Header/Header';


function Account(props) {
    return ( 
        <div className="account">
            <Header isLogged={true}/>
            <div className="account__form-container">
                <h1 className="account__title">Привет, Илья!</h1>
                <form className="account__form">
                    <div className="account__input-container">
                        <div className="account__name-cont">
                            <label htmlFor="name-input" className="account__name">Имя</label>
                            <input className="account__name-input" type="text" placeholder="Илья" name="name-input"/>
                        </div>
                        <div className="account__email-cont">
                            <label htmlFor="email-input" className="account__email">Email</label>
                            <input className="account__email-input" type="text" placeholder="email@email.com" name="email-input"/>
                        </div>
                    </div>
                    <div className="account__but-cont">
                        <button className="account__submit-but" type="submit">Редактировать</button>
                        <button className="account__exit-but" type="">Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default Account;