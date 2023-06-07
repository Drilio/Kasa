import "../Styles/propriétaire.css";




export default function Propriétaire(props) {
    const name = props.name;
    const picture = props.picture


    return (
        <div className="info-propriétaire">
            <p className="nom-propriétaire">{name}</p>
            <img src={picture} className="img-propriétaire" alt="propriétaire-logement"></img>
        </div>
    )

}