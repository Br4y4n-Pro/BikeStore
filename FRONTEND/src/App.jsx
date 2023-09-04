import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { Login } from "./components/LOGIN/login";
import { Registro } from "./components/Registrarse/Registro";
// import  {Detalles}  from "./components/Detalles/detalles";
import { Footer } from "./components/footer";
import { Navbar } from "./components/Naver";
import { Contenido } from "./components/contenido";
function App() {
  return (
    
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Contenido />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
