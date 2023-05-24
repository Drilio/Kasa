import { Link } from 'react-router-dom'
import "../Styles/Error.css";


export default function Error() {
    return (
        <div className="main-error">
            <div id="error-up">
                <h1 id="error-title">404</h1>
                <p id="error-texte">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link id="main-link" to="/" >Retourner sur la page d’accueil</Link>
        </div>
    )
}

