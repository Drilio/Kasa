import Header from "./Header";
import Card from "./Cards";
import Equipements from "./Equipements";

export default function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Equipements />
        <Card />
      </div>
    </div>
  )
}