import { useParams } from "react-router-dom"
import logementsData from "../logements.json";
import "../Styles/proprietere.css";




export default function Proprietere() {
    //récupération de l'ID via l'URL
    const { id } = useParams();

    // récupération des informations dans logements.json correspondant à l'id
    const infoLogement = logementsData.find(entry => entry.id === id);


    return (
        <div className="info-proprietere">
            <p className="nom-proprietere">{infoLogement.host.name}</p>
            <img src={infoLogement.host.picture} className="img-proprietere" alt="proprietere-logement"></img>
        </div>
    )

}