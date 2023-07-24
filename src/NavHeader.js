import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./images/Logo.png";

export default function NavHeader(){



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
            <NavLink className="nav-elem" to="/sonstiges">SONSTIGES</NavLink>
            <NavLink className="nav-elem" to="/kontakt">KONTAKT</NavLink>
        </nav>
    </div>
    );


}