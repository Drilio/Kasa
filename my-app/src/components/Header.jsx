import "../Styles/Header.css"
import k from '../images/K.png'
import logo from '../images/Logo.png'
import s from '../images/S.png'
import a from '../images/a.png'
import { Link } from 'react-router-dom'

export default function Header() {

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
                        <li><Link to="/" >Accueil</Link></li>
                        <li><Link to="/A-Propos" >A Propos</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="banner">
                <h1 id="title-banner">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}
