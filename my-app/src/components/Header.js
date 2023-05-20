import "../Styles/Header.css"
import k from '../images/K.png'
import logo from '../images/Logo.png'
import s from '../images/S.png'
import a from '../images/a.png'


function Logo(){
    return (<div className='img-header'>
        <img src={k} alt="K"></img>
        <img src={logo} alt="logo"></img>
        <img src={s} alt="s"></img>
        <img src={a} alt="a"></img>
        </div>)
}

function Navigation(){
    return(<nav>
       <ul>
            <li><a href="../../public/index.html">Accueil</a></li>
            <li><a href="../../public/a-propos.html">A Propos</a></li>
       </ul>
    </nav>
    )
}

function Header(){
    return(<div class="header">
        <Logo/>
        <Navigation/>
    </div>)
}

export default Header