import './SearchBar.css'

function SearchBar() {
  return (
    <form className="search">

      <h3 className="search__heading">Buscar ahora</h3>

      <div className="search__group">
        <label className="search__label">Ciudad o estado</label>
        <input
          type="text"
          className="search__input"
          placeholder="Ej. Guadalajara, CDMX..."
        />
      </div>

      <div className="search__group">
        <label className="search__label">Tipo de gimnasio</label>
        <input
          type="text"
          className="search__input"
          placeholder="CrossFit, yoga, box..."
        />
      </div>

      <div className="search__divider">
        <span>o filtra por</span>
      </div>

      <div className="search__filters">
        <button type="button" className="search__chip search__chip--active">Todos</button>
        <button type="button" className="search__chip">Abierto ahora</button>
        <button type="button" className="search__chip">Con piscina</button>
        <button type="button" className="search__chip">24 horas</button>
      </div>

      <button type="submit" className="search__submit">
        Buscar gimnasios
      </button>

    </form>
  )
}

export default SearchBar