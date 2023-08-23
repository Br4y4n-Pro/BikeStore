import "../../assets/styles/modalIngreso.css";

export const ModalNice = ({ cerrarModal }) => {
  return (
    <>
    <div className="modal-overlay">
          <div className="modal-content">
            <h2>Ingreso Exitoso</h2>
            <p>¡Has ingresado correctamente!</p>
            <button
              className="modal-close"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </div>
        </div>
        </>
  )
}

export const modalError = () => {
  return (
    <>
    <div className="modal-overlay">
          <div className="modal-content">
            <h2>Ingreso Exitoso</h2>
            <p>¡Has ingresado correctamente!</p>
            <button
              className="modal-close"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </div>
        </div>
        </>
  )
}

