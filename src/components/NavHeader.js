import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";
import { useState } from "react";

export default function NavHeader(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown(){
        setIsDropdownOpen(!isDropdownOpen)};

    return(
    <div className="header">
        <div className="head-wrapper">
            <div className="outer-div"></div>
            <div className="inner-div"><h1>Turn Club Köln-Poll 1904 e.V.</h1></div>
            <div className="outer-div"><img className="logo" src={logo} alt="vereinslogo"/></div>
        </div>
        <nav>
            <NavLink className="nav-elem" to="/">STARTSEITE</NavLink>
            <NavLink className="nav-elem" to="/news">NEWS</NavLink>
            <NavLink className="nav-elem" to="/sportangebote">SPORTANGEBOTE</NavLink>
            <NavLink className="nav-elem" to="/ueberuns">ÜBER UNS</NavLink>
            <div className="nav-elem dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                SONSTIGES
                {isDropdownOpen && 
                    <ul className="dropdown-menu">
                        <li><NavLink className="subnav-elem" to="sonstiges/historisches">Historisches</NavLink></li>
                        <li><NavLink className="subnav-elem" to="sonstiges/ehrungen">Ehrungen/Jubiläen</NavLink></li>
                        <li><NavLink className="subnav-elem" to="sonstiges/allianz">Allianz Kölner Sport</NavLink></li>
                        <li><NavLink className="subnav-elem" to="sonstiges/rollerueckwaerts">Rolle Rückwärts</NavLink></li>
                    </ul>}
            </div>
            <NavLink className="nav-elem" to="/kontakt">KONTAKT</NavLink>
        </nav>
    </div>
    );


}