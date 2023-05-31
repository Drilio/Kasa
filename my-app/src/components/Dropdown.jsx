import "../Styles/Dropdown.css"
import { useState } from 'react'


export default function Dropdown({ titre, children }) {
    const [isOpen, setIsOpen] = useState(false);

    function oppener() {
        if (isOpen === false) {
            setIsOpen(true);
            document.getElementById(titre).className = 'fa-solid fa-chevron-up';
        } else {
            setIsOpen(false);
            document.getElementById(titre).className = 'fa-solid fa-chevron-down';
        };

    }
    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >{titre} </h3><button onClick={oppener}><i id={titre} className="fa-solid fa-chevron-down"></i></button>
                </div>
                {isOpen ? (
                    <div className="contenu-dropdown">
                        {children}
                    </div >
                ) : ("")}

            </div>

        </>
    )
}