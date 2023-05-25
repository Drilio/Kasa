import "../Styles/Header.css"
import k from '../images/K.png'
import logo from '../images/Logo.png'
import s from '../images/S.png'
import a from '../images/a.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'




export default function Header() {

    const [isActive, setIsActive] = useState(false);

    function underlineNav() {
        if (isActive === false) {
            setIsActive(true);
            document.getElementById('accueil').setAttribute('class', 'active')
        } else {
            setIsActive(false);
            document.getElementById('accueil').setAttribute('class', 'pending')
        };
    }

    return (
        <div className="header">
            <div className="top-header">
                <div className='img-header'>
                    <img src={k} alt="K"></img>
                    <img src={logo} alt="logo"></img>
                    <img src={s} alt="s"></img>
                    <img src={a} alt="a"></img>
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
