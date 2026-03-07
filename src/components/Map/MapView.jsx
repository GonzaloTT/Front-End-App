import './MapView.css'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, Circle } from "@react-google-maps/api"
import { useEffect, useState, useContext } from "react"
import { searchNearbyGyms } from "../../utils/googleService"
import { GymContext } from "../../contexts/GymContext"
import { saveFavoriteGym } from "../../services/favoriteService"
import Preloader from "../UI/Preloader/Preloader"
import ErrorMessage from "../UI/Error/ErrorMessage"

const libraries = ["places"]

function MapView({ city, type }) {

  const {gyms, setGyms, selectedGym, setSelectedGym, map, setMap} = useContext(GymContext)
  const [center, setCenter] = useState(null)
  const [mapMoved, setMapMoved] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries
  })

  const mapOptions = {
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: window.google?.maps?.ControlPosition.RIGHT_BOTTOM, 
  },
  mapTypeControl: true,
  mapTypeControlOptions: {
    position: window.google?.maps?.ControlPosition.TOP_RIGHT, 
  },
  streetViewControl: false, 
  };

  const handleSaveFavorite = async (gym) => {
  try {
    setLoading(true)

    await saveFavoriteGym(gym)

    alert("Gym saved as favorite ⭐")
  } catch (err) {
    setError("Could not save favorite gym")
  } finally {
    setLoading(false)
  }
  }

    useEffect(() => {
    if (!city || !window.google) return
    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address: city }, (results, status) => {
    if (status === "OK") {
      const location = results[0].geometry.location
      const newCenter = {
        lat: location.lat(),
        lng: location.lng()
      }
      setCenter(newCenter)
    } else {
      console.error("Geocode error:", status)
    }
  })
  }, [city])

   useEffect(() => {
    if (city) return
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCenter(userLocation)
    })
  }, [city])

   useEffect(() => {
    if (!map || !center) return

    setLoading(true)
    setError(null)

    searchNearbyGyms(map, center, type)
      .then(results => {
        setGyms(results)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError("No se pudieron cargar los gimnasios.")
        setLoading(false)
      })
  }, [map, center, type, setGyms])

  useEffect(() => {
    if (!map || !selectedGym) return

    const lat = selectedGym.geometry.location.lat()
    const lng = selectedGym.geometry.location.lng()

    map.panTo({ lat, lng })
  }, [map, selectedGym])

  const searchThisArea = async () => {
  if (!map) return
  const center = map.getCenter()
  const newCenter = {
    lat: center.lat(),
    lng: center.lng()
  }
  try {
    const results = await searchNearbyGyms(map, newCenter, type)
    setGyms(results)
    setMapMoved(false)
  } catch (error) {
    console.error(error)
  }
  }

  return (
    <section className="map-view">
      <div className="map-view__header">
        <h2 className="map-view__title">Mapa de Gimnasios</h2>
        <span className="map-view__status">
          Mostrando resultados cercanos
        </span>
      </div>

      <div className="map-view__container">
         {loading && <Preloader />}
         {error && <ErrorMessage message={error} />}
         {!isLoaded || !center ? (
          <div className="map-view__placeholder">
            <div className="map-view__grid"></div>
            <p className="map-view__text">Detectando ubicación...</p>
          </div>
        ) : (

          <>
          <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(mapInstance) => setMap(mapInstance)}
            onDragEnd={() => setMapMoved(true)}
            onZoomChanged={() => setMapMoved(true)}
            options={mapOptions}
          >
            {center && (
              <Marker
                position={center}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: "#f44242",
                  fillOpacity: 1,
                  strokeColor: "white",
                  strokeWeight: 2
            }}
            />
            )}
            {center && (
              <Circle
                center={center}
                radius={1000}
                options={{
                  fillColor: "#4285F4",
                  fillOpacity: 0.2,
                  strokeColor: "#4285F4",
                  strokeOpacity: 0.5,
                  strokeWeight: 1
            }}
             />
            )}
            {gyms.map(gym => (
              <Marker
                key={gym.place_id}
                position={{
                  lat: gym.geometry.location.lat(),
                  lng: gym.geometry.location.lng()
                }}
                onClick={() => setSelectedGym(gym)}
                icon={
                selectedGym?.place_id === gym.place_id
                  ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }
                animation={
                  selectedGym?.place_id === gym.place_id
                  ? window.google.maps.Animation.DROP
                  : null
                }
              />
            ))}
             {selectedGym && (
                <InfoWindow
                  position={{
                    lat: selectedGym.geometry.location.lat(),
                    lng: selectedGym.geometry.location.lng()
                  }}
                  onCloseClick={() => setSelectedGym(null)}
                >
                  <div className="map-info-window">
                    <h3>{selectedGym.name}</h3>
                    <p>{selectedGym.vicinity}</p>
                    <p>⭐ {selectedGym.rating || "N/A"}</p>
                    <button onClick={() => handleSaveFavorite(gyms)}>
                      Save Favorite ⭐
                    </button>
                  </div>
                </InfoWindow>
              )}
          </GoogleMap >

          {mapMoved && (
            <button
            className="map-view__search-btn"
            onClick={searchThisArea}
            >
            Buscar en esta área
            </button>
          )}
          </>
        )}
      </div>
    </section>
  )
}

export default MapView