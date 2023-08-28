
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/LOGIN/login";
import { Registro } from "./components/Registrarse/Registro";
import  {Detalles}  from "./components/Detalles/detalles";
import  Home  from './components/Home'
function App(){
  return (
    <>
   
   <Router>
        <Routes>
        <Route path="/home" element={ <Home/> } />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Detalles" element={<Detalles />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
   
    </>
  );
}

export default App;