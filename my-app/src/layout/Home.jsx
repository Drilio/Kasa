import Card from "../components/Cards"
import Banner from "../components/Banner";
import logementsData from "../logements.json";


export default function App() {
  return (
    <div className="page-content">
      <Banner pathname="/" />
      <div className="main-card">
        {logementsData.map((data) => (
          <Card id={data.id} cover={data.cover} title={data.title} />
        )
        )}
      </div>
    </div>
  )
}