import { useParams } from "react-router-dom"
import logementsData from "../logements.json";


export default function FicheLogement() {
    const { id } = useParams();

    const infoLogement = logementsData.find(entry => entry.id === id);

    return (
        <>
            {infoLogement ? (
                <div>
                    <h1>{infoLogement.title}</h1>
                    <p>{infoLogement.location}</p>

                    {infoLogement.tags.map((tag) => (
                        <div className="Tags">
                            <p>{tag}</p>
                        </div>
                    ))}

                </div>
            ) : (
                <p>Data not found for ID: {id}</p>
            )
            }
        </>

    )
}