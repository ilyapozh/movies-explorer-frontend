import './notFound.css';
import {useHistory} from 'react-router-dom';


function NotFound() {

let history = useHistory();

function onBackClick() {
    history.goBack();
}

    return ( 
        <div className="notFound">
            <div className="notFound__cont">
                <div className="notFound__title-cont">
                    <h1 className="notFound__title">404</h1>
                    <h2 className="notFound__sub-title">Страница не найдена</h2>
                </div>
                <button type="button" className="notFound__back-but" onClick={onBackClick}>Назад</button>
            </div>
        </div>
    );
  }
  
  export default NotFound;