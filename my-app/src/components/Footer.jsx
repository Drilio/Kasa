
import logoFooter from '../images/Logo-footer.png'
import KasaRight from '../images/KASARight.png'
import "../Styles/Footer.css";


export default function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className='img-footer'>
                    <img src={logoFooter} alt="logo-footer"></img>
                </div>
                <img src={KasaRight} id='kasa-rights' alt="Kasa rights"></img>
            </div>
        </div>
    )
}
