import "../Styles/Cards.css";

export default function Card(props) {

    const title = props.title;
    const id = props.id
    const cover = props.cover

    return (
        <>
            <article key={id} id={id} className="card" >
                <a href={`/Fiche-logement/${id}`}>
                    <div className="img-gradient">
                        <img src={cover} alt={title}></img>
                    </div>
                    <p>{title}</p>
                </a>
            </article>
        </>
    );
}
