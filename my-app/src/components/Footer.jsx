
import kFooter from '../images/K-footer.png'
import logoFooter from '../images/Logo-footer.png'
import sFooter from '../images/S-footer.png'
import aFooter from '../images/a-footer.png'
import KasaRight from '../images/KASARight.png'
import "../Styles/Footer.css";


export default function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className='img-footer'>
                    <img src={kFooter} alt="K-footer"></img>
                    <img src={logoFooter} alt="logo-footer"></img>
                    <img src={sFooter} alt="s-footer"></img>
                    <img src={aFooter} alt="a-footer"></img>
                </div>
                <img src={KasaRight} id='kasa-rights' alt="Kasa rights"></img>
            </div>
        </div>
    )
}
