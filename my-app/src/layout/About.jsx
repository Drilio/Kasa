import Dropdown from "../components/Dropdown"
import "../Styles/App-apropos.css";
import Banner from "../components/Banner";
import AboutData from "../about.json"



export default function AppAPropos() {

  return (
    <div className="apropos">
      <Banner pathname="/A-Propos" />
      <div className="main-apropos">
        {AboutData.map((data, index) => (
          <Dropdown key={index} title={data.title} contenu={data.contenu} />
        ))}
      </div>
    </div>
  )
}
