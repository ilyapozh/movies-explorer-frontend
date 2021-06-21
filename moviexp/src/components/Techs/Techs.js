import './techs.css';


function Techs(props) {
    return ( 
        <div className="techs" id="techs">
            <h2 className="about-project__title">Технологии</h2>
            <h1 className="techs__title">7 технологий</h1>
            <p className="techs__paragraph">
                На курсе веб-разработки мы освоили технологии, 
                которые применили в дипломном проекте.
            </p>
            <ul className="techs__container">
                <li className="techs__tech-frame">HTML</li>
                <li className="techs__tech-frame">JS</li>
                <li className="techs__tech-frame">CSS</li>
                <li className="techs__tech-frame">React</li>
                <li className="techs__tech-frame">Git</li>
                <li className="techs__tech-frame">Express.js</li>
                <li className="techs__tech-frame">MongoDB</li>
            </ul>
        </div>
    );
  }
  
  export default Techs;