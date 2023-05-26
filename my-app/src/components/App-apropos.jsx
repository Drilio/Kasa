import AproposBanner from "./Apropos-Banner"
import Fiabilite from "./Fiabilite"
import Respect from "./Respect"
import Service from "./Service"
import Securite from "./Securite"
import "../Styles/App-apropos.css";




export default function AppAPropos() {
  return (
    <div className="apropos">
      <AproposBanner />
      <div className="main-apropos">
        <Fiabilite />
        <Respect />
        <Service />
        <Securite />
      </div>
    </div>
  )
}
