import React, { useState, useRef } from 'react';
import "../assets/styles/slider.css";
import ciclamon from "../assets/Img/BICIS/img 1.jpg";
import ciclamon2 from "../assets/Img/BICIS/img 2.jpg";
import ciclarut from "../assets/Img/BICIS/img ruta.jpg";
import ciclarut2 from "../assets/Img/BICIS/img ruta2.jpg";

 export const Slider = () => {
  const [indice, setIndice] = useState(1);
  const slideRefs = [useRef(null), useRef(null), useRef(null)];

  const avanzaSlide = (n) => {
    muestraSlides(indice + n);
  };

  const posicionSlides = (n) => {
    muestraSlides(n);
  };

  const muestraSlides = (n) => {
    if (n > slideRefs.length) {
      setIndice(1);
    } else if (n < 1) {
      setIndice(slideRefs.length);
    } else {
      setIndice(n);
    }
  };

  return (
    <>
      <div className="slide-contenedor">
        <div className={`miSlider fade ${indice === 1 ? 'active' : ''}`} ref={slideRefs[0]}>
          <img className="img-slider" src={ciclamon} alt="" />
        </div>
        <div className={`miSlider fade ${indice === 2 ? 'active' : ''}`} ref={slideRefs[1]}>
          <img className="img-slider" src={ciclarut} alt="" />
        </div>
        <div className={`miSlider fade ${indice === 3 ? 'active' : ''}`} ref={slideRefs[2]}>
          <img className="img-slider" src={ciclamon2} alt="" />
        </div>

        <div className="direcciones">
          <button className='atras' onClick={() => avanzaSlide(-1)}>&#10094;</button>
          <button className='adelante' onClick={() => avanzaSlide(1)}>&#10095;</button>
        </div>
        <div className="barras">
          <span className={`barra ${indice === 1 ? 'active' : ''}`} onClick={() => posicionSlides(1)}></span>
          <span className={`barra ${indice === 2 ? 'active' : ''}`} onClick={() => posicionSlides(2)}></span>
          <span className={`barra ${indice === 3 ? 'active' : ''}`} onClick={() => posicionSlides(3)}></span>
        </div>
      </div>
    </>
  );
};


 