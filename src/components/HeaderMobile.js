import { useState } from "react";

/* eslint-disable no-lone-blocks */

const HeaderMobile = (props) => {

  const [showNav, setShowNav] = useState(false);

  // const handleTogle = (ev) => {
  //   setShowNav();
  // }
  return (
    <div className="showSmaller">
      <button className="header_button" onClick={() =>setShowNav(!showNav)}><i class="fa-solid fa-seedling header_button-icon"></i></button>
      {
        showNav?<nav className="navElements">
        <ul className="navElements_list">
          <li><a className="navElements_list-link" href="#home">Inicio</a></li>
          <li><a className="navElements_list-link" href="#aboutMe">Sobre mí</a></li>
          <li><a className="navElements_list-link" href="#skills">Habilidades</a></li>
          <li><a className="navElements_list-link" href="#projects">Proyectos</a></li>
          <li><a className="navElements_list-link" href="#contactMe">Contacto</a></li>
        </ul>
      </nav>:null
      }
    </div>
  );
}

export default HeaderMobile;


{/* <button onClick={() => props.setToggle(!props.toggle)} className="header_button"><i className="fa-solid fa-bars"></i></button>
          {props.show && <nav>
                      <ul>
                        <li><a href="#"></a>inicio</li>
                        <li><a href="#"></a>sobre mí</li>
                        <li><a href="#"></a>proyectos</li>
                        <li><a href="#"></a>contacto</li>
                      </ul>
                    </nav>} */}