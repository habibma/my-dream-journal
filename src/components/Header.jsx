import React from "react";

import icon from '../assets/graduation-cap-solid.svg'

const Header = () => {
    return (
        <nav className="navbar">
            <img className="nav--logo" src={icon} alt='graduation cap icon'/>
            <h1 className="nav--title">My Dream Journal</h1>
        </nav>
    )
}

export default Header;