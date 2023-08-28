import React from "react";
import "../../assets/styles/registro.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
import back from "../../assets/Img/FondoLoginMovil/back.png";
import logo from "../../assets/Img/logo/font kelly slab.png";
// import { ModalRegis } from "./modalregi";
// import { useState, useEffect } from "react";
import {useForm} from 'react-hook-form' 

export const Registro = () => {



  // const registrarUser = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("http://localhost:3050/usuario", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(regis),
  //     });
  //     const data = await res.json();

  //     console.log(data);

  //     if (res.status === 201) {
  //       console.log("se regiostro")
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   console.log("envio los datos ", regis);
  // };

const {register,handleSubmit,formState:{errors}} = useForm();
console.log(errors)
const onSubmit = handleSubmit((data)=>{console.log(data)} )


  return (
    <>
      <div className="contenedor_register">
        <button className="btn-back">
          <img className="back_login" src={back} alt="" />
        </button>

        <div className="contenedor-small">
          <div className="zoneImagen">
            <img src={LogoMovil} alt="" />
            <div className="Bienvenida">
              <h3>Registrarse</h3>
              <p>Bienvenido</p>
            </div>
          </div>
          <div className="formulario">
            <img className="logo_movil" src={logo} alt="" />

            <form className="form-space" onSubmit={onSubmit}  >
              <div className="form">
                <input
                  placeholder="Nombre"
                  className="input_login"
                  type="text"
                  {...register("Nombre" ,{
                    required:true
                  })}
                />
                {
                  errors.Nombre&& <span>EL NOMBRE ES REQUERIDO </span>
                }
                <input
                  placeholder="Apellido"
                  className="input_login"
                  type="text"
                  {...register("Apellido" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Correo Electronico"
                  className="input_login"
                  type="text"
                  {...register("Correo Electronico" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Confirmar Correo Electronico"
                  className="input_login"
                  type="text"
                  {...register("Confirmar Correo Electronico" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Numero de telefono"
                  className="input_login"
                  type="number"
                  {...register("Numero de telefono" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Contraseña"
                  className="input_login"
                  type="password"
                  {...register("Contraseña" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Confirmar contraseña"
                  className="input_login"
                  type="password"
                  {...register("Confirmar contraseña" ,{
                    required:true
                  })}
                />
                <input
                  placeholder="Documento de Identidad"
                  className="input_login"
                  type="number"
                  {...register("Documento de Identidad" ,{
                    required:true,
                    minLength:8,
                    maxLength:12
                  

                  })}
                />
                <input
                  placeholder="Direccion"
                  className="input_login"
                  type="text"
                  {...register("Direccion" ,{
                    required:true
                  })}
                />
                <button className="btn-login" type="submit">
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




// import React from "react";
// import "../../assets/styles/registro.css";
// import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
// import back from "../../assets/Img/FondoLoginMovil/back.png";
// import logo from "../../assets/Img/logo/font kelly slab.png";
// import { ModalRegis } from "./modalregi";
// import { useState, useEffect } from "react";
// import {useForm} from 'react-hook-form' 

// export const Registro = () => {




  
//   const [register, setRegister] = useState({
//     nombre: "",
//     apellido: "",
//     correo_electronico: "",
//     direccion: "",
//     hash_contraseña: "",
//     numero_telefono: "",
//     documento_identidad: ""
//   });


//   const handleregisus = (e) => {s
//     setRegister({ ...register, [e.target.name]: e.target.value });
//   };

//   const registrarUser = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3050/usuario", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(register),
//       });
//       const data = await res.json();

//       console.log(data);

//       if (res.status === 201) {
//         console.log("se regiostro")
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     console.log("envio los datos ", register);
//   };

// const {registe} = useForm();

//   return (
//     <>
//       <div className="contenedor_register">
//         <button className="btn-back">
//           <img className="back_login" src={back} alt="" />
//         </button>

//         <div className="contenedor-small">
//           <div className="zoneImagen">
//             <img src={LogoMovil} alt="" />
//             <div className="Bienvenida">
//               <h3>Registrarse</h3>
//               <p>Bienvenido</p>
//             </div>
//           </div>
//           <div className="formulario">
//             <img className="logo_movil" src={logo} alt="" />

//             <form className="form-space" onSubmit={registrarUser}>
//               <div className="form">
//                 <input
//                   placeholder="Nombre"
//                   className="input_login"
//                   name="nombre"
//                   type="text"
//                   // {...registe("nombre",{
//                   //   required: true
//                   // })}
//                   onChange={handleregisus}
//                 />
//                 <input
//                   placeholder="Apellido"
//                   className="input_login"
//                   name="apellido"
//                   type="text"
//                   onChange={handleregisus}
//                 />
//                 <input
//                   placeholder="Correo Electronico"
//                   className="input_login"
//                   name="correo_electronico"
//                   type="text"
//                   onChange={handleregisus}
//                 />
//                 <input
//                   placeholder="Confirmar Correo Electronico"
//                   className="input_login"
//                   name="correo_electronico"
//                   type="text"
//                 />
//                 <input
//                   placeholder="Numero de telefono"
//                   className="input_login"
//                   name="numero_telefono"
//                   type="number"
//                   onChange={handleregisus}
//                 />
//                 <input
//                   placeholder="Contraseña"
//                   className="input_login"
//                   name="hash_contraseña"
//                   onChange={handleregisus}
//                   type="password"
//                 />
//                 <input
//                   placeholder="Confirmar contraseña"
//                   className="input_login"
//                   name="hash_contraseña"
//                   type="password"
//                 />
//                 <input
//                   placeholder="Documento de Identidad"
//                   className="input_login"
//                   name="documento_identidad"
//                   type="number"
//                   onChange={handleregisus}
//                 />
//                 <input
//                   placeholder="Direccion"
//                   className="input_login"
//                   name="direccion"
//                   type="text"
//                   onChange={handleregisus}
//                 />
//                 <button className="btn-login" type="submit">
//                   Registrar
//                 </button>
//                 <a className="registrarse">Iniciar Sesion</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



