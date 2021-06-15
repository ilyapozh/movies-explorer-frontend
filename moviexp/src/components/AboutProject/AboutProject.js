import './about-project.css';

function AboutProject() {
    return (
        <div className="about-project__container" >
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__article-container"> 
                <div className="about-project__column-container">
                    <h2 className="about-project__art-title">Дипломный проект включал 5 этапов</h2>
                    <p className="about__paragraph"> 
                        Составление плана, работу над бэкендом, вёрстку, 
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__column-container">
                    <h2 className="about-project__art-title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about__paragraph"> 
                        У каждого этапа был мягкий и жёсткий дедлайн, 
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default AboutProject;