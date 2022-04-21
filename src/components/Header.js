import React from "react";

import headerImg from "../assets/images/headerImg.png";
import '../index.css';

function Header(props) {
    return (
        <header>
            <img src={headerImg} alt="placeholderAltTextOfMyHeaderImg" />
            <h2> Diana Taylor</h2>
        </header>
    );
}
export default Header;