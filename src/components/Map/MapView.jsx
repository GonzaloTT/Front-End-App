import './MapView.css'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const center = {
  lat: 20.5888,
  lng: -100.3899
}

function MapView() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  })

  return (
    <section className="map-view">
      <div className="map-view__header">
        <h2 className="map-view__title">Mapa de Gimnasios</h2>
        <span className="map-view__status">
          Mostrando resultados cercanos
        </span>
      </div>

      <div className="map-view__container">
         {!isLoaded ? (
          <div className="map-view__placeholder">
            <div className="map-view__grid"></div>
            <p className="map-view__text">Cargando mapa...</p>
          </div>
        ) : (

          <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{
              width: "100%",
              height: "100%"
            }}
          />

        )}
      </div>
    </section>
  )
}

export default MapView