import './navtab.css'


function NavTab(props) {
    return (
        <div className="navtab">
            <nav className="navtab__container"> 
                <a className="navtab__link" href="#aboutProject">О проекте</a>
                <a className="navtab__link" href="#techs">Технологии</a>
                <a className="navtab__link" href="#aboutMe">Студент</a>
            </nav>
        </div>
    );
  }
  
  export default NavTab;