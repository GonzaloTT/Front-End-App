import './GymCard.css'

function GymCard({ gym }) {

  if (!gym) return null

  return (
    <article className="gym-card">
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