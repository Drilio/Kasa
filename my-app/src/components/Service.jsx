import { useState } from 'react'
import "../Styles/Dropdown.css";



export default function Service() {
    const [isOpen, setIsOpen] = useState(false);
    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById('chevron-service').setAttribute('class', 'fa-solid fa-chevron-up')
        } else {
            setIsOpen(false);
            document.getElementById('chevron-service').setAttribute('class', 'fa-solid fa-chevron-down')
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >Service </h3><button onClick={oppener}><i id='chevron-service' className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="contenu-dropdown">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div >
                ) : ("")}

            </div>

        </>
    )
}
