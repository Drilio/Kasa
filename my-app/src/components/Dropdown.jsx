import "../Styles/Dropdown.css"
import { useState } from 'react'


export default function Dropdown({ titre, children }) {
    const [isOpen, setIsOpen] = useState(false);


    function oppener(event) {
        let dropdown = event.target.closest('.dropdown');
        let contenu = dropdown.querySelector(".contenu-dropdown");

        console.log(dropdown)
        if (isOpen === false) {
            setIsOpen(true);
            contenu.style.height = `${contenu.scrollHeight}px`;

        } else {
            setIsOpen(false);
            contenu.style.height = 0;
        };
    }

    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >{titre} </h3><button onClick={oppener}><i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></button>
                </div>
                <div className={isOpen ? "contenu-dropdown active" : "contenu-dropdown"}>
                    {children}
                </div >
            </div>

        </>
    )
}