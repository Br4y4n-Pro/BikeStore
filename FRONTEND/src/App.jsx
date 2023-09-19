import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/LOGIN/login";
import { Registro } from "./components/Registrarse/Registro";
import { Contenido } from "./components/contenido";
import { Accesorios } from "./components/NavbarMenu/Accesorios";
import { Bicicletas } from "./components/NavbarMenu/Bicicletas.jsx";
import { Mantenimiento } from "./components/NavbarMenu/Mantenimiento";
import { SerCliente } from "./components/NavbarMenu/SerCliente";
import { NotFound } from "./components/NotFound";
import { Detalles } from "./components/Detalles/detalles";
import { Carrito } from "./components/Carrito de compras/Carrito";
import { Perfil } from "./components/Perfil/perfil";
import { AdminZone } from "./components/admin";
import { ProductoForm } from "./components/ProductoForm";

function App() {

    
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Contenido />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Accesorios" element={<Accesorios />} />
          <Route path="/Bicicletas" element={<Bicicletas />} />
          <Route path="/Mantenimiento" element={<Mantenimiento />} />
          <Route path="/Servicio-Cliente" element={<SerCliente />} />
          <Route path="/Detalles/Bicicletas/:detalleCicla" element={<Detalles />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Productos" element={<AdminZone />} />
          <Route path="/Productos/Añadir" element={<ProductoForm/>}/>
          <Route path="/perfil/:nombreLink" element={<Perfil/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
