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
          <li><a className="nav_list-link" href="#home">inicio</a></li>
          <li><a className="nav_list-link" href="#aboutMe">sobre mí</a></li>
          <li><a className="nav_list-link" href="#skills">habilidades</a></li>
          <li><a className="nav_list-link" href="#projects">proyectos</a></li>
          <li><a className="nav_list-link" href="#contactMe">contacto</a></li>
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