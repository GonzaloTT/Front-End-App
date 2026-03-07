import './MapView.css'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react"
import { searchNearbyGyms } from "../../services/googleService"
const libraries = ["places"]

function MapView() {

  const [map, setMap] = useState(null)
  const [gyms, setGyms] = useState([])
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
              />
            ))}
          </GoogleMap>
        )}
      </div>
    </section>
  )
}

export default MapView