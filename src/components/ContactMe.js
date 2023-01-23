const ContactMe = () => {
    return (
        <section id="contactMe" className="contactSection">
          <h2 className="contactSection_title">contacta conmigo</h2>
          <p>Puedes ponerte en contacto conmigo en mis redes sociales:</p>
          <div>
            <div><a href="">Linkedin</a></div>
            <div><a href="">Twitter</a></div>
          </div>
          <div className="contactSection_div">
            <p>También puedes escribirme directamente un mensaje aquí:</p>
              <form className="contactSection_form" action="">
                <legend className="contactSection_form-legend">Nombre completo
                <input className="contactSection_form-input" type="text"/></legend>
                <legend className="contactSection_form-legend">Email
                <input className="contactSection_form-input" type="text"/></legend>
                <legend className="contactSection_form-legend">Mensaje
                <input className="contactSection_form-input" type="text"/></legend>
              </form>
          </div>
        </section>
    );
}

export default ContactMe;