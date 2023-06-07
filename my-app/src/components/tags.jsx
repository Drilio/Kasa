

export default function Tags(props) {

    const index = props.index;
    const contenu = props.contenu


    return (
        <>
            <p key={index} className="tag">{contenu}</p>
        </>
    )


}