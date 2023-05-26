import { useState } from 'react'
import "../Styles/Dropdown.css";



export default function Fiabilite() {
    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-fiabilite').className = 'fa-solid fa-chevron-up';
        } else {
            setIsOpen(false);
            document.getElementById('chevron-fiabilite').className = 'fa-solid fa-chevron-down';
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Fiabilité </h3><button onClick={oppener}><i id='chevron-fiabilite' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="contenu-dropdown">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
