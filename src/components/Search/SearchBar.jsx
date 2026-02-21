import './SearchBar.css'

function SearchBar() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Ej. Querétaro, CDMX..."
      />
      <button type="submit" className="search__button">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar