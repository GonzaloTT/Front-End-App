import SearchBar from '../Search/SearchBar'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <section className="hero">
          <h1 className="hero__title">
            Encuentra gimnasios en tu ciudad
          </h1>
          <p className="hero__subtitle">
            Localiza espacios de entrenamiento cerca de ti con información clara y precisa.
          </p>
          <SearchBar />
        </section>
      </div>
    </main>
  )
}

export default Main