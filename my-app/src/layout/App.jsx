import Card from "../components/Cards"
import Banner from "../components/Banner";

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