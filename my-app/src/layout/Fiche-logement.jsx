import { useParams } from "react-router-dom"
import React, { useState } from 'react';
import logementsData from "../logements.json";
import "../Styles/Dropdown.css";
import "../Styles/Fiche-logement.css";
import Proprietere from "../components/Proprietere";
import Note from "../components/note";
import Error from "./Error";
import Dropdown from "../components/Dropdown";


export default function FicheLogement() {

    //récupération de l'ID via l'URL
    const { id } = useParams();
    console.log(id);

    // récupération des informations dans logements.json correspondant à l'id
    const infoLogement = logementsData.find(entry => entry.id === id);

    const showCounterArrows = infoLogement.pictures.length > 1;


    //carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    //bouton précedent du carousel
    function previousSlide() {
        setCurrentIndex(function (prevIndex) {
            if (prevIndex === 0) {
                return infoLogement.pictures.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }
    //bouton suivant du carousel
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
                        ))}{showCounterArrows && (
                            <div className="counter-arrows">
                                <p className="picture-counter">{currentIndex + 1}/{infoLogement.pictures.length}</p>
                                <button className="prev-button" onClick={previousSlide}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button className="next-button" onClick={nextSlide}>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="info-logement-main">
                        <div className="general-info-logement">
                            <div className="info-logement-right">
                                <div>
                                    <h1>{infoLogement.title}</h1>
                                    <p>{infoLogement.location}</p>
                                </div>

                                <div className="tags">
                                    {infoLogement.tags.map((tag, index) => (
                                        <p key={index} className="tag">{tag}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="left-general-info-logement">
                                <Proprietere />
                                <Note scaleValue={infoLogement.rating} />
                            </div>
                        </div>


                        <div className="dropdown-contener">
                            <Dropdown titre="Description">
                                <p>{infoLogement.description}</p>
                            </Dropdown>
                            <Dropdown titre="Equiepement">
                                <ul>
                                    {infoLogement.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            </Dropdown>
                        </div>
                    </div>


                </div>
            ) : (
                <div>
                    <Error />
                </div>
            )
            }
        </>

    )
}