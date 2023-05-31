import "../Styles/Header.css"
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'




export default function Header() {

    const [isActive, setIsActive] = useState(false);

    function underlineNav() {
        if (isActive === false) {
            setIsActive(true);
            document.getElementById('accueil').setAttribute('className', 'active')
        } else {
            setIsActive(false);
            document.getElementById('accueil').setAttribute('className', 'pending')
        };
    }

    return (
        <div className="header">
            <div className="top-header">
                <div className='img-header'>
                    <img src={logo} alt="logo"></img>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/" id="accueil" onClick={underlineNav} className="">Accueil</NavLink></li>
                        <li><NavLink to="/A-Propos" id="a-propos" onClick={underlineNav} className="">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
