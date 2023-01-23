/* eslint-disable jsx-a11y/anchor-is-valid */
const Landing = () => {
    return (
        <section id="home" className="landingSection">
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
    );
}

export default Landing;