import MapView from '../Map/MapView'
import GymCard from '../Gyms/GymCard'

function Gyms() {
  return (
    <main className="main">
      <div className="results__container">
        <MapView />
        
        <section className="results__list">
          <GymCard />
          <GymCard />
          <GymCard />
        </section>
      </div>
    </main>
  )
}

export default Gyms