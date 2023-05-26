import "../Styles/Note.css";




export default function Note(props) {

    const scaleValue = props.scaleValue;
    const range = [1, 2, 3, 4, 5]

    function noteLogement(rangeElem) {
        if (scaleValue >= rangeElem) {
            return <i className="fa-solid fa-star red"></i>;
        } else {
            return <i className="fa-solid fa-star grey"></i>;
        }
    }

    return (
        <div id="notation">
            {range.map((rangeElem) => (
                <span key={rangeElem}>{noteLogement(rangeElem)}</span>
            ))}
        </div>
    );
}
