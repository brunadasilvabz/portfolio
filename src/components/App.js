import { useState } from "react";

//STYLES
import "../styles/App.scss";

//COMPONENTS
import Header from "./Header";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";


function App() {

const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle}></Header>
      <main className="main">
        <Landing></Landing>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
