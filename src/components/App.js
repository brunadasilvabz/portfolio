/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/App.scss";
import Header from "./Header";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";






function App() {
  return (
    <div className="App">
      <Header></Header>
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
