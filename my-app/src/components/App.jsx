import Card from "./Cards";
import Banner from "./Banner";

export default function App() {
  return (
    <div className="page-content">
      <Banner />
      <div className="main-card">
        <Card />
      </div>
    </div>
  )
}