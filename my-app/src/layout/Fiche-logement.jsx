import { useParams } from "react-router-dom"
import logementsData from "../logements.json";
import "../Styles/Fiche-logement.css";
import Propriétaire from "../components/propriétaire";
import Note from "../components/note";
import Error from "./Error";
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";
import Tags from "../components/tags";

export default function FicheLogement() {

    //récupération de l'ID via l'URL
    const { id } = useParams();

    // récupération des informations dans logements.json correspondant à l'id
    const infoLogement = logementsData.find(entry => entry.id === id);

    return (
        <>
            {infoLogement !== undefined ? (
                <div className="fiche-logement">
                    <Carousel pictures={infoLogement.pictures} />
                    <div className="info-logement-main">
                        <div className="general-info-logement">
                            <div className="info-logement-right">
                                <div>
                                    <h1>{infoLogement.title}</h1>
                                    <p>{infoLogement.location}</p>
                                </div>
                                <div className="tags">
                                    {infoLogement.tags.map((tag, index) => (
                                        <Tags index={index} contenu={tag} />
                                    ))}
                                </div>
                            </div>
                            <div className="left-general-info-logement">
                                <Propriétaire picture={infoLogement.host.picture} name={infoLogement.host.name} />
                                <Note scaleValue={infoLogement.rating} />
                            </div>
                        </div>


                        <div className="dropdown-contener">
                            <Dropdown title="Description" contenu={infoLogement.description} />
                            <Dropdown title="Equipement" contenu={infoLogement.equipments} />
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