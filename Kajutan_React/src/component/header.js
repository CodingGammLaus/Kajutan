import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';

import {NavLink} from 'react-router-dom';

class Header extends React.Component {

    render() { 
        return (
            <nav>
                <NavLink to="kajutan-react">
                    <img className="logo" src={require("../bilder/Kajutan_logo.png")} alt="Kajutan Logo" />
                </NavLink>
            
                <ul>
                    <li><NavLink to="kajutan-react">Hem</NavLink></li>
                    <li><NavLink to="meny">Meny</NavLink></li>
                    <li><NavLink to="bokabord">Boka bord</NavLink></li>
                    <li><NavLink to="om">Om oss</NavLink></li>
                    <li><NavLink to="kontakt">Kontakta oss</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Header;