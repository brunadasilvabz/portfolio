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
          <div className="contactSection_formDiv">
            <p className="contactSection_formDiv-text">También puedes escribirme directamente un mensaje aquí:</p>
              <form className="contactSection_formDiv-form" action="">
                <legend className="form-legend">Nombre completo
                <input className="form-input" type="text"/></legend>
                <legend className="form-legend">Email
                <input className="form-input" type="text"/></legend>
                <legend className="form-legend">Mensaje
                <input className="form-input" type="text"/></legend>
              </form>
          </div>
        </section>
    );
}

export default ContactMe;