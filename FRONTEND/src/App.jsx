import React from "react";
import { Footer } from "./components/footer";
import { Contenido } from "./components/contenido"
import { Login } from "./components/LOGIN/login";
import { Slider } from "./components/slider";



function App() {
  return (
    <>
       <Slider/>
      <Contenido />
      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
