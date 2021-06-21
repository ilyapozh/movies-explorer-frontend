import './about-me.css';
import profilePicPath from '../../images/profile_vitalik.svg';


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
                        Я родился в Москве, в семидесятом. На краю города, моча рано ударила в голову:
                        В четыре активно ругался матом. В детском саду девочки впервые показали мне п*зду.
                        Потом школа, вонючая форма. Драки, клей - так я становился сильней.
                        Воровал деньги в раздевалке, в восемь начал курить. В одиннадцать кинул первую палку, 
                        забил на родителей.
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