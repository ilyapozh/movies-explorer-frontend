import './footer.css';


function Footer(props) {
    return ( 
        <footer className="footer">
            <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
            <div className="footer__container">
                <span className="footer__copyright">© 2021</span>
                <div className="footer__link-container">
                    <a href className="footer__link">Яндекс.Практикум</a>
                    <a href className="footer__link">Github</a>
                    <a href className="footer__link">Facebook</a>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;