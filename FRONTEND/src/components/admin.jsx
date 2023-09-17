import { Link } from "react-router-dom"
export const AdminZone = () => {
  return (
    <>
    <main>
    <aside>
      <header>
          Aqui va logo
      </header>

      <div>
        <div>
        <Link>Agregar Productos</Link>
        <Link>Estadisticas</Link>
        <Link>Compras</Link>
        <Link>Actualizar Productos</Link>
        </div>
        <div>
        <Link>Cerrar Session</Link>
        <Link>Ir al Home</Link>
        </div>
      </div>
    </aside>

<article>
    <div>
      grafico de ventas por dia
    </div>
    <div>
      
    </div>
    <div></div>
</article>
    </main>
    </>
  )
}
