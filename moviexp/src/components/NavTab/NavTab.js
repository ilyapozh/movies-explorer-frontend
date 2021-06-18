import './navtab.css'


function NavTab(props) {
    return (
        <div className="navtab">
            <nav className="navtab__container"> 
                <a className="navtab__link" href>О проекте</a>
                <a className="navtab__link" href>Технологии</a>
                <a className="navtab__link" href>Студент</a>
            </nav>
        </div>
    );
  }
  
  export default NavTab;