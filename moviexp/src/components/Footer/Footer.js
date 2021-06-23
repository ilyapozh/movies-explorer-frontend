import './footer.css';


function Footer(props) {
    return ( 
        <footer className="footer">
            <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
            <div className="footer__container">
                <span className="footer__copyright">© 2021</span>
                <div className="footer__link-container">
                    <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/" className="footer__link">Github</a>
                    <a href="https://www.linkedin.com/" className="footer__link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;