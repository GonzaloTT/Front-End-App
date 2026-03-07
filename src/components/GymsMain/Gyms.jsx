import MapView from '../Map/MapView'
import GymList from '../Gyms/GymList'
import './Gyms.css'

function Gyms() {
  return (
    <main className="gyms">
      <div className="gyms__container">

        <div className="gyms__map">
          <MapView />
        </div>
        
        <section className="gyms__list">
          <GymList />
        </section>

      </div>
    </main>
  )
}

export default Gyms