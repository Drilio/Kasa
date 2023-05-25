import "../Styles/Dropdown.css"
import { useState } from 'react'
import { useParams } from "react-router-dom"
import logementsData from "../logements.json";




export default function Equipements() {
    const { id } = useParams();
    const infoLogement = logementsData.find(entry => entry.id === id);

    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-Equipement').setAttribute('className', 'fa-solid fa-chevron-up')
        } else {
            setIsOpen(false);
            document.getElementById('chevron-Equipement').setAttribute('className', 'fa-solid fa-chevron-down')
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Equipements </h3><button onClick={oppener}><i id='chevron-Equipement' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen && infoLogement ? (
                    <div className="contenu-dropdown">
                        <ul>
                            {infoLogement.equipments.map((equipment) => (
                                <li>{equipment}</li>
                            ))}
                        </ul>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
