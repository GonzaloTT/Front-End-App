import { useContext } from "react"
import { GymContext } from "../../contexts/GymContext"
import GymCard from "./GymCard"

function GymList() {

  const { gyms } = useContext(GymContext)

  return (
    <section className="gym-list">

      {gyms.length === 0 ? (
        <p>No se encontraron gimnasios cercanos</p>
      ) : (
        gyms.map(gym => (
          <GymCard
            key={gym.place_id}
            gym={gym}
          />
        ))
      )}

    </section>
  )
}

export default GymList