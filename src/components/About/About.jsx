import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">
          Sobre GymFinder
        </h2>
        <p className="about__text">
          GymFinder es una aplicación diseñada para localizar gimnasios cercanos
          utilizando datos geográficos en tiempo real. Su objetivo es ofrecer una
          experiencia clara, rápida y estructurada.
        </p>
      </div>
    </section>
  )
}

export default About