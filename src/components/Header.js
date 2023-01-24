import { useState } from "react";

/* eslint-disable no-lone-blocks */

const Header = () => {

  const [showNav, setShowNav] = useState(false);

  // const handleTogle = (ev) => {
  //   setShowNav();
  // }
  return (
    <header className="header">
      <button className="header_button" onClick={() =>setShowNav(!showNav)}><i class="fa-solid fa-seedling"></i></button>
      {
        showNav?<nav className="nav">
        <ul className="nav_list">
          <li><a className="nav_list-link" href="#home">Inicio</a></li>
          <li><a className="nav_list-link" href="#aboutMe">Sobre mí</a></li>
          <li><a className="nav_list-link" href="#skills">Habilidades</a></li>
          <li><a className="nav_list-link" href="#projects">Proyectos</a></li>
          <li><a className="nav_list-link" href="#contactMe">Contacto</a></li>
        </ul>
      </nav>:null
      }

      
    </header>
  );
}

export default Header;


{/* <button onClick={() => props.setToggle(!props.toggle)} className="header_button"><i className="fa-solid fa-bars"></i></button>
          {props.show && <nav>
                      <ul>
                        <li><a href="#"></a>inicio</li>
                        <li><a href="#"></a>sobre mí</li>
                        <li><a href="#"></a>proyectos</li>
                        <li><a href="#"></a>contacto</li>
                      </ul>
                    </nav>} */}