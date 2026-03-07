import './GymCard.css'
import { useContext, useEffect } from "react"
import { GymContext } from "../../contexts/GymContext"

function GymCard({ gym }) {

  const { selectedGym, setSelectedGym } = useContext(GymContext)

  if (!gym) return null

  const isSelected = selectedGym?.place_id === gym.place_id

  useEffect(() => {
    if (selectedGym?.place_id === gym.place_id) {
    const element = document.getElementById(`gym-${gym.place_id}`)
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  }
  }, [selectedGym])

  return (
    <article id={`gym-${gym.place_id}`}
      className={`gym-card ${isSelected ? "gym-card--selected" : ""}`}
      onClick={() => setSelectedGym(gym)}>
      <div className="gym-card__top">
        <h3 className="gym-card__title">
        {gym.name}
      </h3>

      <div className="gym-card__rating">
        ★ {gym.rating || "N/A"}
      </div>
      </div>

      <p className="gym-card__address">
        {gym.vicinity}
      </p>
    </article>
  )
}

export default GymCard