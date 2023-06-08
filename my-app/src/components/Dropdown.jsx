import "../Styles/Dropdown.css"
import { useState } from 'react'


export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const title = props.title;
    const contenu = props.contenu;


    function renderContenu() {
        if (Array.isArray(contenu)) {
            return (
                <ul>
                    {contenu.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{contenu}</p>;
        }
    }

    function oppener(event) {
        let dropdown = event.target.closest('.dropdown');
        let contenuElement = dropdown.querySelector(".contenu-dropdown");
        if (isOpen === false) {
            setIsOpen(true);
            contenuElement.style.height = `${contenuElement.scrollHeight}px`;

        } else {
            setIsOpen(false);
            contenuElement.style.height = 0;
        };
    }

    return (
        <>
            <div className="dropdown">
                <div className="oppener-dropdown">
                    <h3 className="titre-dropdown" >{title} </h3>
                    <button onClick={oppener}><
                        i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                </div>
                <div className={isOpen ? "contenu-dropdown active" : "contenu-dropdown"}>
                    {renderContenu()}
                </div>
            </div>
        </>
    )
}