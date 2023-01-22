const ContactMe = () => {
    return (
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
    );
}

export default ContactMe;