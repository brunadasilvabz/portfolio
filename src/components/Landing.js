/* eslint-disable jsx-a11y/anchor-is-valid */
const Landing = () => {
    return (
        <section id="home" className="landingSection">
          <h1 className="landingSection_title">hola, soy Bruna</h1>
          <p className="landingSection_desc">desarrolladora front-end</p>
          <ul className="landingSection_list">
            <li className="landingSection_list-element"><a className="link" href="https://github.com/brunadasilvabz" target="_blank" rel="noreferrer">github</a>
            </li>
            <li className="landingSection_list-element"><a className="link" href=" https://www.linkedin.com/in/brunadasilvabarrozo/"
            target="_blank">linkedin</a></li>
            <li className="landingSection_list-element"><a className="link" href="https://twitter.com/brunadasilvabz" target="_blank" rel="noreferrer">twitter</a>
            </li>
            <li className="landingSection_list-element"><a className="link instagram" href="" target="_blank">instagram</a></li>
            <li className="landingSection_list-element"><a className="link cv" href="./assets/archive/cv_bruna.pdf" download
            target="_blank">descargar cv</a>
            </li>
          </ul>

          <p className="landingSection_text">¡sigue bajando!</p>
          <div className="landingSection_div"><i className=" landingSection_div-arrow fa-solid fa-arrow-down"></i></div>
        </section>
    );
}

export default Landing;