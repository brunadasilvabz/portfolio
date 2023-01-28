/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_4v2lsuk', 'template_ohb45d3', form.current, 'BoxfTjcN5vOMKAcv2')
      .then((result) => {
          props.setStatusMessage("¡Email enviado correctamente!")
      }, (error) => {
        props.setStatusMessage("Por favor vuelve a intentarlo.")
      });
  };

    return (
        <section id="contactMe" className="contactSection">
          <h2 className="contactSection_title">Contacto</h2>
          
          <div className="contactSection_div">
            <p className="contactSection_div-text">Puedes ponerte en contacto conmigo en mis redes sociales:</p>
            <div className="contactSection_div-elements">
              <div className="link_element"><a href=" https://www.linkedin.com/in/brunadasilvabarrozo/" target="_blank"><i class="link_element-link fa-brands fa-linkedin"></i></a></div>
              <div className="link_element"><a href="https://twitter.com/brunadasilvabz" target="_blank"><i class="link_element-link fa-brands fa-square-twitter"></i></a></div>
            </div>
          </div>
          <div className="contactSection_formDiv">
            <p className="contactSection_formDiv-text">También puedes escribirme directamente un mensaje aquí:</p>


              <form ref={form} onSubmit={sendEmail} className="form" action="">
                <div className="form_section">
                  <legend className="form_section-legend" for="fullname">Nombre completo</legend>
                  <input className="form_section-input" type="text" name="fullname" id="fullname" placeholder="Nombre..." required/>
                </div>
                <div className="form_section">
                  <legend className="form_section-legend" for="email">Email</legend>
                  <input className="form_section-input" type="text" name="email_id" id="email_id" placeholder="nombre.apellido@gmail.com" required/>
                </div>
                <div className="form_section">
                  <legend className="form_section-legend" for="message">Mensaje</legend>
                  <textarea className="form_section-textarea form_section-input" type="text" name="message" id="message" placeholder="¿Qué necesitas?" required/>
                </div>
                <div className="form_section">
                  <input className="form_section-btn" type="submit" id="submit" value="enviar"></input>
                </div>
                <p className='statusText'>{props.statusMessage}</p>
              </form>
          </div>
        </section>
    );
}

export default ContactMe;