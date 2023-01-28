/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return (
        <footer className="footer">
          <p className="footer_text">&copy; 2023 Bruna Da Silva</p>
          <ul className="footer_list">
            <li><a className="footer_list-element" href="https://github.com/brunadasilvabz" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-square-github"></i></a>
            </li>
            <li><a className="footer_list-element" href="https://www.linkedin.com/in/brunadasilvabarrozo/" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-linkedin"></i></a></li>
            <li><a className="footer_list-element" href="https://twitter.com/brunadasilvabz" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-square-twitter"></i></a></li>
            <li><a className="footer_list-element" href="" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
            </li>
          </ul>
     </footer>
    );
}

export default Footer;