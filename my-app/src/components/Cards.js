import "../Styles/Cards.css"
import logements from "../logements.json"

function handleClick(e) {
    console.log(e)
  }
  
function Card(){
    return logements.map((data)=>
        (<div className="Card" >
            <img onClick={()=>handleClick()} src={data.cover} alt={data.title}></img>
        <p key={data.id} id={data.id}>{data.title}</p>
    </div>)
    )
}

export default Card