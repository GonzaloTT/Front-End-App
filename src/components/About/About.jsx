import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__header">
        <span className="about__subtitle">¿QUIÉNES SOMOS?</span>
        <h2 className="about__title">SOBRE GYMFINDER</h2>
      </div>

      <div className="about__grid">

        <div className="about__card">
          <span className="about__number">01</span>
          <h3 className="about__card-title">NUESTRA MISIÓN</h3>
          <p>
            Facilitar la búsqueda de gimnasios,
            combinando datos geográficos con una experiencia rápida y clara.
          </p>
        </div>

        <div className="about__card">
          <span className="about__number">02</span>
          <h3 className="about__card-title">TECNOLOGÍA</h3>
          <p>
            Utilizamos Google Places API y herramientas modernas de desarrollo
            web para ofrecer información precisa y actualizada.
          </p>
        </div>

        <div className="about__card">
          <span className="about__number">03</span>
          <h3 className="about__card-title">VISIÓN</h3>
          <p>
            Convertirnos en la plataforma de referencia para encontrar
            gimnasios en cualquier ciudad, de forma simple y confiable.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About