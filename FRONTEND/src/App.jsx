
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/LOGIN/login";
import { Registro } from "./components/Registrarse/Registro";
// import  {Detalles}  from "./components/Detalles/detalles";
import { Footer } from "./components/footer";
import { Navbar } from "./components/Naver";
import { Contenido } from './components/contenido'
function App(){

  return (
    <>
   <Navbar />
   <Router>
        <Routes>
        <Route exact path="/" Redirect to="/Home"/>
        <Route path="/Home" element={ <Contenido /> } />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
   <Footer/>
   </>
  );

}

export default App;