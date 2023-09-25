import React from "react";
import { Navbar } from "../Naver";
import { Footer } from "../footer";

import "../../assets/styles/servicio.css";

export const SerCliente = () => {
  return (
    <>
      <Navbar />
      <div className="contenedor_servicio">
        <h1 className="ser">SERVICIO AL CLIENTE</h1>
        <div className="container-R">
          <p className="">Ponte en contacto</p>
          <form action="#" method="post">
            <div className="form-group">
              <input
                className="tip"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
              ></input>
              <input
                className="tip"
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                className="tip"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              ></input>
              <input
                className="tip"
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                required
              ></input>
            </div>

            <input
              className="tipo"
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Dirección"
              required
            ></input>
            <textarea
              className="tipo"
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>

            <input type="submit" value="Enviar"></input>
          </form>
        </div>
      </div>
    </>
  );
};
