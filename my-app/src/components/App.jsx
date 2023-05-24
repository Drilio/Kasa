import Card from "./Cards";
import Banner from "./Banner";

export default function App() {
  return (
    <div>
      <Banner />
      <div className="main-card">
        <Card />
      </div>
    </div>
  )
}