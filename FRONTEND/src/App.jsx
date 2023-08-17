

import React from "react";
import { Footer } from "./components/footer";
import { Contenido } from "./components/contenido"
// import { Login } from "./components/LOGIN/login";
import  Naver  from './components'
import { Registro } from "./components/Registrarse/Registro";

function App(){
  return (
    <>
     <Naver/>
      <Contenido />
      <Footer />
      <Registro />
    </>
  );
}

export default App;