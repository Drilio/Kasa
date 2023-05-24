import "../Styles/Cards.css";
import logementsData from "../logements.json";

export default function Card() {


    return (
        <>
            {
                logementsData.map((data) => (
                    <article key={data.id} className="card">
                        <div className="img-gradient">
                            <img src={data.cover} alt={data.title}></img>
                        </div>
                        <p>{data.title}</p>
                    </article>
                ))
            }
        </>
    );
}
