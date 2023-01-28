const AboutMe = () => {
    return (
    <section id="aboutMe" className="aboutMeSection">
        <h2 className="aboutMeSection_title">Sobre mí</h2>
        <div className="aboutMeSection_div">
            {/* <div className="aboutMeSection_div-div">
                <img className="div-img" src="https://via.placeholder.com/150/" alt="Bruna"/>
                <p className="div-text hidden-div">Tempora eaque, doloremque voluptate quae molestiae quas natus qui nihil modi.</p>
            </div> */}
            <p className="aboutMeSection_div-text">Durante un momento lleno de dudas acerca de mi futuro y sobre el camino que quería tomar, decidí aprender sobre el <span className="span-text">desarrollo web</span>.
            Algo que sabía que como mínimo me aportaría muchas herramientas útiles, terminó convirtiéndose en algo por lo que siento mucho <span className="span-text">respeto</span> y sobre lo que quiero seguir aprendiendo.</p>
            <p className="aboutMeSection_div-text">Tras terminar el bootcamp de desarrollo web, me encuentro estudiando <span className="span-text">para adentrarme todavía más en este mundo</span> y también busco mi primer trabajo como desarrolladora web junior.
            </p>
        </div>
  </section>
  );
}

export default AboutMe;