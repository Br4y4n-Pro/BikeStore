

import React from "react";
import { Footer } from "./components/footer";
import { Contenido } from "./components/contenido"
// import { Login } from "./components/LOGIN/login";
import  Naver  from './components'
import { Registro } from "./components/Registrarse/Registro";
import { Login } from "./components/LOGIN/login"

function App(){
  const pruebaApi = async () =>{
   const response = await fetch("http://localhost:3050/productos")
   const data = await response.json()
   
   console.log(data) 
  }

  return (
    <>

    


     {/* <Naver/>
      <Contenido />
  <Footer />*/}
      <Login /> 
      {/* <Registro /> */}
    </>
  );
}

export default App;