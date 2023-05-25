import { useState } from 'react'
import "../Styles/Dropdown.css";



export default function Securite() {
    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-securite').setAttribute('className', 'fa-solid fa-chevron-up')
        } else {
            setIsOpen(false);
            document.getElementById('chevron-securite').setAttribute('className', 'fa-solid fa-chevron-down')
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Sécurité </h3><button onClick={oppener}><i id='chevron-securite' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="contenu-dropdown">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
