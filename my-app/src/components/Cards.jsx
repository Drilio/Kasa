import "../Styles/Cards.css";
import logementsData from "../logements.json";


export default function Card() {



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
