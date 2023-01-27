import HeaderMobile from "./HeaderMobile";
import HeaderBigScreen from "./HeaderBigScreen";

import "../styles/App.scss";

const Header = (props) => {
    return (
        <header className="header">
            <HeaderMobile classname toggle={props.toggle} setToggle={props.setToggle}></HeaderMobile>
            <HeaderBigScreen></HeaderBigScreen>
        </header>
    );
}

export default Header;