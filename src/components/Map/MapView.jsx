import './MapView.css'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, MarkerClusterer } from "@react-google-maps/api"
import { useEffect, useState, useContext } from "react"
import { searchNearbyGyms } from "../../services/googleService"
import { GymContext } from "../../contexts/GymContext"

const libraries = ["places"]

function MapView() {

  const {gyms, setGyms, selectedGym, setSelectedGym, map, setMap} = useContext(GymContext)
  const [center, setCenter] = useState(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries
  })

   useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCenter(userLocation)
    })
  }, [])

   useEffect(() => {
    if (!map || !center) return
    searchNearbyGyms(map, center)
      .then(results => {
        setGyms(results)
      })
      .catch(console.error)
  }, [map, center])

  useEffect(() => {
    if (!map || !selectedGym) return

    const lat = selectedGym.geometry.location.lat()
    const lng = selectedGym.geometry.location.lng()

    map.panTo({ lat, lng })
  }, [selectedGym])

  return (
    <section className="map-view">
      <div className="map-view__header">
        <h2 className="map-view__title">Mapa de Gimnasios</h2>
        <span className="map-view__status">
          Mostrando resultados cercanos
        </span>
      </div>

      <div className="map-view__container">
         {!isLoaded || !center ? (
          <div className="map-view__placeholder">
            <div className="map-view__grid"></div>
            <p className="map-view__text">Detectando ubicación...</p>
          </div>
        ) : (
          <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(mapInstance) => setMap(mapInstance)}
          >
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
                  ? window.google.maps.Animation.BOUNCE
                  : null
                }
              />
            ))}
          </GoogleMap>
        )}
      </div>
    </section>
  )
}

export default MapView