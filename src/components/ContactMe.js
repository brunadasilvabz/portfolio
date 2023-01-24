/* eslint-disable jsx-a11y/anchor-is-valid */
const ContactMe = () => {
    return (
        <section id="contactMe" className="contactSection">
          <h2 className="contactSection_title">contacta conmigo</h2>
          
          <div className="contactSection_div">
            <p className="contactSection_div-text">Puedes ponerte en contacto conmigo en mis redes sociales:</p>
            <div className="contactSection_div-elements">
              <div className="link_element"><a className="link_element-link" href="">Linkedin</a></div>
              <div className="link_element"><a className="link_element-link" href="">Twitter</a></div>
            </div>
          </div>
          {/* <div className="contactSection_formDiv">
            <p className="contactSection_formDiv-text">También puedes escribirme directamente un mensaje aquí:</p>
              <form className="form" action="">
                <div className="form_section">
                  <legend className="form_section-legend" for="fullname">Nombre completo</legend>
                  <input className="form_section-input" type="text" id="fullname" placeholder="Nombre..." required/>
                </div>
                <div className="form_section">
                  <legend className="form_section-legend" for="email">Email</legend>
                  <input className="form_section-input" type="text" id="email" placeholder="nombre.apellido@gmail.com" required/>
                </div>
                <div className="form_section">
                  <legend className="form_section-legend" for="message">Mensaje</legend>
                  <textarea className="form_section-input" type="text" id="message" placeholder="¿Qué necesitas?" required/>
                </div>
                <div className="form_section">
                  <input className="form_section-btn" type="submit" id="submit" value="enviar"></input>
                </div>
              </form>
          </div> */}
        </section>
    );
}

export default ContactMe;