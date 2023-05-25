import "../Styles/Dropdown.css"
import { useState } from 'react'
import { useParams } from "react-router-dom"
import logementsData from "../logements.json";

export default function Description() {
    const { id } = useParams();
    const infoLogement = logementsData.find(entry => entry.id === id);

    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-description').setAttribute('className', 'fa-solid fa-chevron-up')
        } else {
            setIsOpen(false);
            document.getElementById('chevron-description').setAttribute('className', 'fa-solid fa-chevron-down')
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Description </h3><button onClick={oppener}><i id='chevron-description' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen && infoLogement ? (
                    <div className="contenu-dropdown">
                        <p>{infoLogement.description}</p>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
