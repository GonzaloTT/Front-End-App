import MapView from '../Map/MapView'
import GymList from '../Gyms/GymList'
import { useLocation } from 'react-router-dom'
import './Gyms.css'

function Gyms() {
  const location = useLocation()

  const city = location.state?.city
  const type = location.state?.type

  return (
    <main className="gyms">
      <div className="gyms__container">

        <div className="gyms__map">
          <MapView city={city} type={type}/>
        </div>
        
        <section className="gyms__list">
          <GymList />
        </section>

      </div>
    </main>
  )
}

export default Gyms