import './about-me.css';
import profilePicPath from '../../images/self-portrait.jpg';


function AboutMe() {
    return (
        <div className="about-me" id="aboutMe"> 
            <h2 className="main__subtitle">
                Студент
            </h2>
            <div className="about-me__container">
                <div className="about-me__text-container">
                    <h1 className="about-me__title">
                        Илья
                    </h1>
                    <h3 className="about-me__age">
                        Веб-разработчик, 28 лет
                    </h3>
                    <p className="about-me__paragraph">
                        Я родился в Луганске, сейчас проживаю на юге Израиля. Изучал физику в Харьковском университете. 
                        Год назад решил получить профессиональные навыки в разработке и присоединился к Яндекс.Практикуму. 
                        До недавних пор занимал руководящую должность в рыбном хозяйстве. 
                        Увлекаюсь гитарой, путешествиями и чтением. 
                    </p>
                    <div className="about-me__link-container">
                        <a className="about-me__link" href="http://github.com">LinkedIn</a>
                        <a className="about-me__link" href="http://github.com">GitHub</a>
                    </div>
                </div>
                <img src={profilePicPath} alt="profile_pic" className="about-me__profile-pic" />
            </div>
        </div>
    );
  }
  
  export default AboutMe;