import React, { useState } from 'react';


export default function Carousel(props) {

    const pictures = props.pictures;


    //on test qu'infoLogement n'est pas null
    const showCounterArrows = pictures !== undefined ? pictures.length > 1 : null;
    //carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    //bouton précedent du carousel
    function previousSlide() {
        setCurrentIndex(function (prevIndex) {
            if (prevIndex === 0) {
                return pictures.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }
    //bouton suivant du carousel
    function nextSlide() {
        setCurrentIndex(function (prevIndex) {
            if (prevIndex === pictures.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    return (
        <div className="carrousel">
            {pictures.map((picture, index) => (
                <img
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : 'disable'}`}
                    src={picture}
                    alt="presentation-logement">
                </img>
            ))}{showCounterArrows && (
                <div className="counter-arrows">
                    <p className="picture-counter">{currentIndex + 1}/{pictures.length}</p>
                    <button className="prev-button" onClick={previousSlide}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="next-button" onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </div>
    )
}
