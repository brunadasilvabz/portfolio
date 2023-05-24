// import html5 from "../images/html.png";
// import css3 from "../images/css.png";
// import sass from "../images/sass.png";
// import javascript from "../images/js.png";
// import react from "../images/react.png";
// import node from "../images/nodejs.png";
// import git from "../images/git.png";
// import github from "../images/github.png";

const Skills = () => {
    return(
        <section className="skillsSection">
            {/* <h2 className="skillsSection_title">Habilidades</h2> */}
            <div  id="skills" className="skillsSection_div">
                <div className="skillsSection_soft">
                    <i className="skillsSection_soft-icon fa-solid fa-user-gear"></i>
                    <h3 className="skillsSection_soft-title">Soft skills</h3>
                    <ul className="softSkills_list">
                        
                        <li className="softSkills_list-element">Trabajo en equipo
                        </li>
                        <li className="softSkills_list-element">Comunicación efectiva
                        </li>
                        <li className="softSkills_list-element">Filosofía Agile y marco de trabajo Scrum
                        </li>
                        <li className="softSkills_list-element">Trabajo en remoto
                        </li>
                    </ul>  
                </div>
                <div className="skillsSection_tech">
                    <i className="skillsSection_tech-icon fa-solid fa-code"></i>
                    <h3 className="skillsSection_tech-title">Habilidades técnicas</h3>
                        {/* <ul className="skillsSection_tech-list">
                            <li><img className="tech-icons" src={html5} alt="html"/></li>
                            <li><img className="tech-icons" src={css3} alt="html"/></li>
                            <li><img className="tech-icons" src={sass} alt="html"/></li>
                            <li><img className="tech-icons" src={javascript} alt="html"/></li>
                            <li><img className="tech-icons" src={react} alt="html"/></li>
                            <li><img className="tech-icons" src={node} alt="html"/></li>
                            <li><img className="tech-icons" src={git} alt="html"/></li>
                            <li><img className="tech-icons" src={github} alt="html"/></li>
                        </ul> */}
                        <ul className="skillsSection_tech-list">
                            <li><i className="tech-icons fa-brands fa-html5"></i></li>
                            <li><i className="tech-icons fa-brands fa-css3-alt"></i></li>
                            <li><i className="tech-icons fa-brands fa-sass"></i></li>
                            <li><i className="tech-icons fa-brands fa-square-js"></i></li>
                            <li><i className="tech-icons fa-brands fa-react"></i></li>
                            <li><i className="tech-icons fa-brands fa-node"></i></li>
                            <li><i className="tech-icons fa-brands fa-git"></i></li>
                            <li><i className="tech-icons fa-brands fa-github"></i></li>
                        </ul>
                </div>
            </div>
        </section>
    );
}
export default Skills;