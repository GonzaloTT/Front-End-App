import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      {message || "Ha ocurrido un error al obtener los datos."}
    </div>
  )
}

export default ErrorMessage