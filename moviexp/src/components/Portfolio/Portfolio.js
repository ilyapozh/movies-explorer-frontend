import './portfolio.css';
import arrowPicPath from '../../images/link-arrow-portfolio.svg';


function Portfolio(props) {
    return ( 
        <div className="portfolio">
            <h1 className="portfolio__title">Портфолио</h1>
            <nav className="portfolio__navtab">
                <a className="portfolio__link" href>
                    <h2 className="portfolio__link-name">Статичный сайт</h2>
                    <img className="portfolio__arrow-pic" src={arrowPicPath} alt="arrow-pic" />
                </a>
                <a className="portfolio__link" href>
                    <h2 className="portfolio__link-name">Адаптивный сайт</h2>
                    <img className="portfolio__arrow-pic" src={arrowPicPath} alt="arrow-pic" />
                </a>
                <a className="portfolio__link" href>
                    <h2 className="portfolio__link-name">Одностраничное приложение</h2>
                    <img className="portfolio__arrow-pic" src={arrowPicPath} alt="arrow-pic" />
                </a>
            </nav>
        </div>
    );
  }
  
  export default Portfolio;