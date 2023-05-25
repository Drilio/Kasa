import "../Styles/Cards.css";
import logementsData from "../logements.json";
import React, { useState, useEffect } from 'react';


export default function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(logementsData);
    }, []);


    return (
        <>
            {
                logementsData.map((data) => (
                    <article key={data.id} id={data.id} className="card" >
                        <a href={`/Fiche-logement/${data.id}`}>
                            <div className="img-gradient">
                                <img src={data.cover} alt={data.title}></img>
                            </div>
                        </a>
                        <p>{data.title}</p>
                    </article>
                ))
            }
        </>
    );
}
