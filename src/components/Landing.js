/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import cvBruna from "../archives/Bruna.pdf"


const Landing = () => {
    return (
        <section id="home" className="landingSection">
          <h1 className="landingSection_title">Hola, <span className="landingSection_title-span">soy Bruna</span></h1>
          <p className="landingSection_desc">Desarrolladora Front-end Junior</p>
          <ul className="landingSection_list">
            <li className="landingSection_list-element"><a className="link" href="https://github.com/brunadasilvabz" target="_blank" rel="noreferrer">github</a>
            </li>
            <li className="landingSection_list-element"><a className="link" href=" https://www.linkedin.com/in/brunadasilvabarrozo/"
            target="_blank">linkedin</a></li>
            <li className="landingSection_list-element"><a className="link" href="https://twitter.com/brunadasilvabz" target="_blank" rel="noreferrer">twitter</a>
            </li>
            {/* <li className="landingSection_list-element"><a className="link instagram" href="" target="_blank">instagram</a></li> */}
            <li className="landingSection_list-element"><a className="link cv" href={cvBruna} download="CV Bruna Da Silva"
            target="_blank">CV</a>
            </li>
          </ul>

          <p className="landingSection_text">¡Sigue bajando!</p>
          <a className="landing-arrow-link" href="#aboutMe">
            <div className="landingSection_div">
              <i className=" landingSection_div-arrow fa-solid fa-arrow-down"></i>
            </div>
          </a>
        </section>
    );
}

export default Landing;