import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import sass from "../images/sass.svg";
import javascript from "../images/javascript.svg";
import react from "../images/html5.svg";
import node from "../images/react.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";

const Skills = () => {
    return(
        <section id="skills" className="skillsSection">
            <h2 className="skillsSection_title">Habilidades</h2>
            <div className="skillsSection_div">
                <div className="skillsSection_soft">
                    <h3 className="skillsSection_soft-title">Soft skills</h3>
                    <ul>
                        <li>Trabajo en remoto
                        </li>
                        <li>Trabajo en equipo
                        </li>
                        <li>Comunicación efectiva
                        </li>
                        <li>Filosofía Agile y marco de trabajo Scrum
                        </li>
                    </ul>  
                </div>
                <div className="skillsSection_tech">
                <h3 className="skillsSection_tech-title">Habilidades técnicas</h3>
                    <ul className="skillsSection_tech-list">
                        <li><img className="tech-icons" src={html5} alt="html"/></li>
                        <li><img className="tech-icons" src={css3} alt="html"/></li>
                        <li><img className="tech-icons" src={sass} alt="html"/></li>
                        <li><img className="tech-icons" src={javascript} alt="html"/></li>
                        <li><img className="tech-icons" src={react} alt="html"/></li>
                        <li><img className="tech-icons" src={node} alt="html"/></li>
                        <li><img className="tech-icons" src={git} alt="html"/></li>
                        <li><img className="tech-icons" src={github} alt="html"/></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Skills;