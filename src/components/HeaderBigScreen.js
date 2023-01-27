

const HeaderBigScreen = () => {
    return (
            <nav className="showBigger navElements">
                <i class="fa-solid fa-seedling navElements_icon"></i>
                <ul className="navElements_list">
                    {/* <li><a className="navElements_list-link" href="#home">Inicio</a></li> */}
                    <li><a className="navElements_list-link" href="#aboutMe">Sobre mí</a></li>
                    <li><a className="navElements_list-link" href="#skills">Habilidades</a></li>
                    <li><a className="navElements_list-link" href="#projects">Proyectos</a></li>
                    <li><a className="navElements_list-link" href="#contactMe">Contacto</a></li>
                </ul>
            </nav>

    );
}

export default HeaderBigScreen;