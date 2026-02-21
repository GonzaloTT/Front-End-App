import './MapView.css'

function MapView() {
  return (
    <section className="map-view">
      <div className="map-view__header">
        <h2 className="map-view__title">Mapa de Gimnasios</h2>
        <span className="map-view__status">
          Mostrando resultados cercanos
        </span>
      </div>

      <div className="map-view__container">
        <div className="map-view__placeholder">
          <div className="map-view__grid"></div>
          <p className="map-view__text">Google Maps se cargará aquí</p>
        </div>
      </div>
    </section>
  )
}

export default MapView