/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/App.scss";
import SlideSmallerScreen from "./SlideSmallerScreen";
import SlideBigScreen from "./SlideBigScreen";





function App() {
  return (
    <div className="App">
      <header className="header">
        <button className="header_button"><i className="fa-solid fa-bars"></i></button>
      </header>
      <main className="main">
        <section className="landingSection">
          <h1 className="landingSection_title">hola, soy Bruna</h1>
          <p className="landingSection_desc">desarrolladora front-end</p>
          <ul className="landingSection_list">
            <li><a className="landingSection_list-element" href="https://github.com/brunadasilvabz" target="_blank" rel="noreferrer">github</a>
            </li>
            <li><a className="landingSection_list-element" href=" https://www.linkedin.com/in/brunadasilvabarrozo/"
            target="_blank">linkedin</a></li>
            <li><a className="landingSection_list-element" href="https://twitter.com/brunadasilvabz" target="_blank" rel="noreferrer">twitter</a>
            </li>
            <li><a className="landingSection_list-element" href="" target="_blank">instagram</a></li>
            <li><a className="landingSection_list-element" href="./assets/archive/cv_bruna.pdf" download
            target="_blank">descargar cv</a>
            </li>
          </ul>

          <p className="landingSection_text">sigue bajando para saber más sobre mí</p>
          <div className="landingSection_div"><i className=" landingSection_div-arrow fa-solid fa-arrow-down"></i></div>
        </section>
        <section className="aboutMeSection">
          <h2 className="aboutMeSection_title">sobre mí</h2>
          <div className="aboutMeSection_div">
            {/* <img className="aboutMeSection_div-img" src="./assets/images/bruna.jpeg" alt="Bruna"> */}
            <p className="aboutMeSection_div-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic totam eligendi
            atque,
            veniam culpa magnam
              accusantium quisquam deleniti. Tempora eaque, doloremque voluptate quae molestiae quas natus qui nihil modi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione eaque perspiciatis nam nesciunt nulla!
           Rerum placeat assumenda laudantium, excepturi minus accusamus culpa blanditiis dolorum quaerat inventore
            veritatis quibusdam amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi, porro
            omnis beatae cupiditate expedita doloribus nobis labore, harum odit minus iusto ex quas. Sint enim officia
            maxime impedit laudantium.
            </p>
          </div>
        </section>
        <section className="projectSection">
          <h2 className="projectSection_title">mis proyectos</h2>
          <div className="projectSection_div2 showSmaller"><SlideSmallerScreen></SlideSmallerScreen></div>
          <div className="projectSection_div1 showBigger"><SlideBigScreen></SlideBigScreen></div>
          

          
        </section>
        <section className="contactSection">
          <h2 className="contactSection_title">contacta conmigo</h2>
          <div>
            <div className="contactSection_div">email</div>
              <form className="contactSection_form" action="">
                <legend className="contactSection_form-legend">También puedes escribirme un mensaje directamente aquí:</legend>
                {/* <input className="contactSection_form-input" type="text"> */}
              </form>
            </div>
        </section>
      </main>
      <footer className="footer">

        <ul className="footer_list">
          <li><a className="footer_list-element" href="https://github.com/brunadasilvabz" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-square-github"></i></a>
          </li>
          <li><a className="footer_list-element" href="https://www.linkedin.com/in/brunadasilvabarrozo/" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-linkedin"></i></a></li>
          <li><a className="footer_list-element" href="https://twitter.com/brunadasilvabz" target="_blank" rel="noreferrer"><i
            className="fa-brands fa-square-twitter"></i></a></li>
          <li><a className="footer_list-element" href="" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
          </li>
        </ul>

     </footer>
    </div>
  );
}

export default App;
