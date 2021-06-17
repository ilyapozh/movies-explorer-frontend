import './about-project.css';

function AboutProject() {
    return (
        <div className="about-project" >
            <h2 className="about-project__title">О проекте</h2>
            <table className="about-project__table">
                <tr className="about-project__table-row">
                    <th className="about-project__art-title">Дипломный проект включал 5 этапов</th>
                    <th className="about-project__art-title">На выполнение диплома ушло 5 недель</th> 
                </tr>
                <tr className="about-project__table-row">
                    <td className="about-project__paragraph"> 
                        Составление плана, работу над бэкендом, вёрстку, 
                        добавление функциональности и финальные доработки.
                    </td>
                    <td className="about-project__paragraph">
                        У каждого этапа был мягкий и жёсткий дедлайн, 
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </td>
                </tr>
            </table>
            <div className="about-project__timing-table">
                <div className="about-project__timing-table-first-column">
                    <p className="about-project__timing-table-text about-project__timing-table-text__back-colour_green">
                        1 неделя
                    </p>
                    <p className="about-project__timing-table-text about-project__timing-table-text__font-colour_grey">
                        Back-end
                    </p>
                </div>
                <div className="about-project__timing-table-second-column"> 
                    <p className="about-project__timing-table-text about-project__timing-table-text__back-colour_grey">
                        4 недели
                    </p>
                    <p className="about-project__timing-table-text about-project__timing-table-text__font-colour_grey">
                        Front-end
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default AboutProject;


//   <div className="about-project__article-container"> 
//                 <div className="about-project__column-container">
//                     <h2 className="about-project__art-title">Дипломный проект включал 5 этапов</h2>
//                     <p className="about__paragraph"> 
//                         Составление плана, работу над бэкендом, вёрстку, 
//                         добавление функциональности и финальные доработки.
//                     </p>
//                 </div>
//                 <div className="about-project__column-container">
//                     <h2 className="about-project__art-title">На выполнение диплома ушло 5 недель</h2>
//                     <p className="about__paragraph"> 
//                         У каждого этапа был мягкий и жёсткий дедлайн, 
//                         которые нужно было соблюдать, чтобы успешно защититься.
//                     </p>
//                 </div>
//     </div>