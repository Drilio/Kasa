import AproposBanner from "./Apropos-Banner"
import Fiabilite from "./Fiabilite"
import Respect from "./Respect"
import Service from "./Service"
import Securite from "./Securite"



export default function AppAPropos() {
  return (
    <div>
      <AproposBanner />
      <div className="main">
        <Fiabilite />
        <Respect />
        <Service />
        <Securite />
      </div>
    </div>
  )
}
