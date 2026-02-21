import './GymCard.css'

function GymCard() {
  return (
    <article className="gym-card">
      <h3 className="gym-card__title">
        Power Gym Center
      </h3>

      <div className="gym-card__rating">
        ★ 4.6
      </div>

      <p className="gym-card__address">
        Av. Constituyentes 123, Querétaro
      </p>
    </article>
  )
}

export default GymCard