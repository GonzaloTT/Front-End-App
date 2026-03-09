import SearchBar from '../Search/SearchBar'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <div className="main__overlay"></div>

      <div className="main__container">
        <section className="hero">

          <div className="hero__badge">
            +8,000 gimnasios disponibles
          </div>

          <h1 className="hero__title">
            ENTRENA <br />
            <span className="hero__highlight">DONDE</span> <br />
            QUIERAS
          </h1>

          <p className="hero__subtitle">
            Encuentra el gimnasio ideal cerca de ti. 
            Compara precios, horarios e instalaciones fácilmente.
          </p>

          <SearchBar />

        </section>

        <section className="tip">
          <h2 className="tip__title">Consejo del día</h2>
          <p className="tip__text">
            La constancia supera a la motivación. 
            Diseña un horario fijo de entrenamiento y respétalo como si fuera una cita importante.
          </p>
        </section>

      </div>
    </main>
  )
}

export default Main