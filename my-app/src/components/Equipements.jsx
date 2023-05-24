import "../Styles/Equipements.css"
import { useState } from 'react'


export default function Equipements() {
    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron').setAttribute('class', 'fa-solid fa-chevron-down')
        } else {
            setIsOpen(false);
            document.getElementById('chevron').setAttribute('class', 'fa-solid fa-chevron-up')
        };

    }
    return (
        <>
            <div className="equipements">
                <div className="oppener-Equipements">
                    <h3 className="titre-Equipements" >Equipements </h3><button onClick={oppener}><i id='chevron' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="liste-Equipements">
                        <li>
                            <ul>sqdsqdsq</ul>
                            <ul>sqdsqdsqd</ul>
                        </li>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
