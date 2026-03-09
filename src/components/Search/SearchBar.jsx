import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api"
import './SearchBar.css'

const gymTypes = [
  "CrossFit",
  "Yoga",
  "Box",
  "Calistenia",
  "Musculación",
  "Pilates",
  "Funcional",
  "Artes marciales"
]

const chips = [
  "Todos",
  "Abierto ahora",
  "24 horas",
  "CrossFit",
  "Yoga",
  "Piscina",
  "Clases grupales"
]

function SearchBar() {
  const navigate = useNavigate()

  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [autocomplete, setAutocomplete] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [activeChip, setActiveChip] = useState("Todos")

  const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  libraries: ["places"]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/gyms', {
      state: {
        city: city,
        type: type
      }
    })
    localStorage.setItem(
      "lastSearch",
      JSON.stringify({ city, type })
  )
  }

  const handlePlaceChanged = () => {
  if (!autocomplete) return
  const place = autocomplete.getPlace()
  if (place.formatted_address) {
    setCity(place.formatted_address)
  }
  }

  const handleTypeChange = (value) => {
  setType(value)
  const matchChip = chips.find(
    chip => chip.toLowerCase() === value.toLowerCase()
  )
  if (matchChip) {
    setActiveChip(matchChip)
  } else {
    setActiveChip(null)
  }
  if (value.length === 0) {
    setSuggestions([])
    return
  }
  const filtered = gymTypes.filter(gym =>
    gym.toLowerCase().includes(value.toLowerCase())
  )
  setSuggestions(filtered)
  }

  const handleChipClick = (chip) => {
  setActiveChip(chip)
  if (chip === "Todos") {
    setType("")
  } else {
    setType(chip)
  }
  setSuggestions([])
  }

  useEffect(() => {
  const savedSearch = localStorage.getItem("lastSearch")
  if (!savedSearch) return
  const { city, type } = JSON.parse(savedSearch)
  if (city) setCity(city)
  if (type) setType(type)
  }, [])

  return (
    <form className="search" onSubmit={handleSubmit}>

      <h3 className="search__heading">Buscar ahora</h3>

      <div className="search__group">
        <label className="search__label">Ciudad o estado</label>
        {!isLoaded ? (
      <input
      type="text"
      className="search__input"
      placeholder="Cargando..."
      />
      ) : (
      <Autocomplete
      onLoad={(auto) => setAutocomplete(auto)}
      onPlaceChanged={handlePlaceChanged}
      options={{
        types: ["(cities)"]
      }}
      >
      <input
        type="text"
        className="search__input"
        placeholder="Ej. Guadalajara, CDMX..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      </Autocomplete>
      )}
      </div>

      <div className="search__group">
        <label className="search__label">Tipo de gimnasio</label>
        <input
          type="text"
          className="search__input"
          placeholder="CrossFit, yoga, box..."
          value={type}
          onChange={(e) => handleTypeChange(e.target.value)}
        />
        {suggestions.length > 0 && (
        <ul className="search__suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="search__suggestion"
              onClick={() => {
              setType(suggestion)
              setSuggestions([])
          }}
        >
          {suggestion}
        </li>
        ))}
      </ul>
      )}
      </div>

      <div className="search__divider">
        <span>o filtra por</span>
      </div>

      <div className="search__filters">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            className={`search__chip ${activeChip === chip ? "search__chip--active" : ""}`}
            onClick={() => handleChipClick(chip)}
          >
        {chip}
          </button>
        ))}
      </div>

      <button type="submit" className="search__submit">
        Buscar gimnasios
      </button>

    </form>
  )
}

export default SearchBar