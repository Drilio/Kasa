import "../Styles/Cards.css";
import logementsData from "../logements.json";

export default function Card() {
    function handleClick(e) {
        console.log("test")
    }

    return (
        <>
            {
                logementsData.map((data) => (
                    <div key={data.id} className="card">
                        <img onClick={() => handleClick()} src={data.cover} alt={data.title}></img>
                        <p>{data.title}</p>
                    </div>
                ))
            }
        </>
    );
}
