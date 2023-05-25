import { useState } from 'react'
import "../Styles/Dropdown.css";



export default function Respect() {
    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-respect').setAttribute('className', 'fa-solid fa-chevron-up')
        } else {
            setIsOpen(false);
            document.getElementById('chevron-respect').setAttribute('className', 'fa-solid fa-chevron-down')
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Respect </h3><button onClick={oppener}><i id='chevron-respect' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="contenu-dropdown">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
