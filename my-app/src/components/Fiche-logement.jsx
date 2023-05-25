import { useParams } from "react-router-dom"
import React, { useState } from 'react';
import logementsData from "../logements.json";
import "../Styles/Dropdown.css";
import "../Styles/Fiche-logement.css";
import Equipements from "./Equipements";
import Description from "./description";



export default function FicheLogement() {
    const { id } = useParams();

    const infoLogement = logementsData.find(entry => entry.id === id);

    const [currentIndex, setCurrentIndex] = useState(0);

    function previousSlide() {
        setCurrentIndex(function (prevIndex) {
            if (prevIndex === 0) {
                return infoLogement.pictures.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function nextSlide() {
        setCurrentIndex(function (prevIndex) {
            if (prevIndex === infoLogement.pictures.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }


    return (
        <>
            {infoLogement ? (
                <div className="fiche-logement">
                    <div className="carrousel">
                        {infoLogement.pictures.map((picture, index) => (
                            <img
                                key={index}
                                className={`slide ${index === currentIndex ? 'active' : 'disable'}`}
                                src={picture}
                                alt="presentation-logement">
                            </img>
                        ))}
                        <button className="prev-button" onClick={previousSlide}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="next-button" onClick={nextSlide}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className="info-logement-main">
                        <div>
                            <h1>{infoLogement.title}</h1>
                            <p>{infoLogement.location}</p>
                        </div>

                        <div className="tags">
                            {infoLogement.tags.map((tag) => (
                                <p className="tag">{tag}</p>
                            ))}
                        </div>
                        <div className="dropdown-contener">
                            <Description />
                            <Equipements />
                        </div>
                    </div>


                </div>
            ) : (
                <p>Data not found for ID: {id}</p>
            )
            }
        </>

    )
}