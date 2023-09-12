import React from "react";
import "../../assets/styles/registro.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
import back from "../../assets/Img/FondoLoginMovil/back.png";
import logo from "../../assets/Img/logo/font kelly slab.png";
// import { ModalRegis } from "./modalregi";
// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Registro = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <>
      <div className="contenedor_register">
        <button className="btn-back">
          <Link to="/Home">
            <img className="back_register" src={back} alt="" />{" "}
          </Link>
        </button>

        <div className="contenedor-small">
          <div className="zoneImagen">
            <img className="logo_movil" src={LogoMovil} alt="" />
            <div className="Bienvenida">
              <h3>Registrarse</h3>
              <p>Bienvenido</p>
            </div>
          </div>
          <div className="formulario">
            <img className="logo_pc" src={logo} alt="" />

            <form className="form-space" onSubmit={handleSubmit(onSubmit)}>
              <div className="form">
                <input
                  placeholder="Nombre"
                  className="input_register"
                  type="text"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "nombre es requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "Nombre debe tener al menos 2 caracteres ",
                    },
                    maxLength: {
                      value: 15,
                      message: "Nombre debe tener maximo 15 caracteres",
                    },
                  })}
                />
                {errors.nombre && (
                  <span className="errorInput">{errors.nombre.message} </span>
                )}
                
                <input
                  placeholder="Apellido"
                  className="input_register"
                  type="text"
                  {...register("apellido", {
                    required: {
                      value: true,
                      message: "apellido es requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "apellido debe tener al menos 2 caracteres ",
                    },
                    maxLength: {
                      value: 15,
                      message: "apellido debe tener maximo 15 caracteres",
                    },
                  })}
                />
                {errors.apellido && (
                  <span className="errorInput">{errors.apellido.message} </span>
                )}
                <input
                  placeholder="Correo Electronico"
                  className="input_register"
                  type="email"
                  name="correo_electronico"
                  {...register("correo_electronico", {
                    required: {
                      value: true,
                      message: "correo es requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Correo no es valido",
                    },
                  })}
                />
                {errors.correo_electronico && (
                  <span className="errorInput">
                    {errors.correo_electronico.message}
                  </span>
                )}
                <input
                  placeholder="Confirmar Correo Electronico"
                  className="input_register"
                  type="text"
                />

                <input
                  placeholder="Numero de telefono"
                  className="input_register"
                  type="number"
                  name="Nt"
                  {...register("numero_telefono", {
                    required: {
                      value: true,
                      message: "numero  es requerido",
                    },
                    minLength: {
                      value: 10,
                      message: "el numero debe tener minimo 10 caracteres",
                    },
                    maxLength: {
                      value: 10,
                      message: "el numero no debe se mayor a 10 caracteres ",
                    },
                    pattern: {
                      value: /^\+?[0-9\s-]+$/,
                      message: "numero  no es valido",
                    },
                  })}
                />
                {errors.numero_telefono && (
                  <span className="errorInput">
                    {errors.numero_telefono.message}{" "}
                  </span>
                )}
                <input
                  placeholder="Contraseña"
                  className="input_register"
                  type="password"
                  {...register("hash_contraseña", {
                    required: {
                      value: true,
                      message: "la contraseña es requerida",
                    },
                  })}
                />
                {errors.hash_contraseña && (
                  <span className="errorInput">
                    {errors.hash_contraseña.message}
                  </span>
                )}
                <input
                  placeholder="Confirmar contraseña"
                  className="input_register"
                  type="password"
                  name="Rhash_contraseña"
                />

                <input
                  placeholder="Documento de Identidad"
                  className="input_register"
                  type="number"
                  name="CC"
                  {...register("documento_identidad", {
                    required: {
                      value: true,
                      message: "documento es requerido",
                    },
                    minLength: {
                      value: 6,
                      message: "el docuemento debe tener minimo 6 caracteres",
                    },
                    maxLength: {
                      value: 12,
                      message: "el documento no debe se mayor a 12 caracteres ",
                    },
                    pattern: {
                      value: /^\+?[0-9\s-]+$/,
                      message: "numero  no es valido",
                    },
                  })}
                />

                {errors.documento_identidad && (
                  <span className="errorInput">
                    {errors.documento_identidad.message}{" "}
                  </span>
                )}

                <input
                  placeholder="Edad"
                  className="input_register"
                  type="number"
                  {...register("edad", {
                    required: {
                      value: true,
                      message: "Edad es requerida",
                    },
                    min: {
                      value: 18,
                      message: "Debes ser mayor de 18 años",
                    },
                    max: {
                      value: 120,
                      message: "Edad inválida",
                    },
                  })}
                />
                {errors.edad && (
                  <span className="errorInput">{errors.edad.message} </span>
                )}
                <input
                  placeholder="Direccion"
                  className="input_register"
                  type="text"
                  {...register("direccion", {
                    required: {
                      value: true,
                      message: "la direcion es requerida",
                    },
                  })}
                />
                {errors.direccion && (
                  <span className="errorInput">
                    {errors.direccion.message}{" "}
                  </span>
                )}
                <button className="btn-register" type="submit">
                  Registrar
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
