import SlideSmallerScreen from "./SlideSmallerScreen";
import SlideBigScreen from "./SlideBigScreen";

const Projects = () => {
    return (
        <section id="projects" className="projectSection">
          <h2 className="projectSection_title">mis proyectos</h2>
          <div className="projectSection_div2 showSmaller"><SlideSmallerScreen></SlideSmallerScreen></div>
          <div className="projectSection_div1 showBigger"><SlideBigScreen></SlideBigScreen></div>
        </section>
    );
}

export default Projects;