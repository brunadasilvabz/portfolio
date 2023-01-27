import { useState } from "react";

//STYLES
import "../styles/App.scss";

//COMPONENTS
import Headers from "./Headers";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";


function App() {

const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Headers toggle={toggle} setToggle={setToggle}></Headers>
      <main className="main">
        <Landing></Landing>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
