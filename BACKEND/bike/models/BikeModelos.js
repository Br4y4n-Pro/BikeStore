const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");
const bcrypt = require("bcrypt");
const pool = new Pool(CONFIG_BD);


const iniciarSesion = async ({correo_electronico}) => {
  
  const result = await pool.query(
    "SELECT * FROM clientes WHERE correo_electronico = $1",
    [correo_electronico]
  );
  console.log(result.rows)
    try {
      //Usuario existe
      if (result.rows.length === 1) {
        //Si existe verificar si es la misma contraseña
        return rows[0];
        }else{
          return null; //no se encontro el correo
        }
      
    } catch (error) {
      console.error("Error al obtener usuario por email", error);
      throw error;
    }
  };

  module.exports = {
    iniciarSesion
  }