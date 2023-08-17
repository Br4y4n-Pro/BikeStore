

import React from "react";
import { Footer } from "./components/footer";
import { Contenido } from "./components/contenido"
import { Login } from "./components/LOGIN/login";
import  Naver  from './components'


function App(){
  return (
    <>
    <Naver/>
      <Contenido />
      <Footer />
      <Login />
  
    </>
  );
}

export default App;