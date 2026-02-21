import MapView from '../Map/MapView'
import GymCard from '../Gyms/GymCard'
import './Gyms.css'

function Gyms() {
  return (
    <main className="gyms">
      <div className="gyms__container">

        <div className="gyms__map">
          <MapView />
        </div>
        
        <section className="gyms__list">
          <GymCard />
          <GymCard />
          <GymCard />
        </section>

      </div>
    </main>
  )
}

export default Gyms