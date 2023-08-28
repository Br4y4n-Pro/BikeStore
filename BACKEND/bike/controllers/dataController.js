const { Pool } = require('pg');
const { CONFIG_BD } = require('../config/db')

const pool = new Pool(CONFIG_BD)

const getProduc = (req, res) => {
    pool.query('SELECT * FROM prod', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos', error);
            res.status(500).send('Error al obtener datos');
        } else {
            res.json(result.rows);
        };
    });
};

const registerUser = (req, res) => {
    const { username, email, password } = req.body;

    // Validar que todos los campos necesarios estén presentes
    if (!username || !email || !password) {
        return res.json.status(400).json({ error: 'Falta información requerida' });
    }

    // Consultar si el usuario ya existe en la base de datos
    pool.query('Select * FROM usuarios WHERE username = $1 OR email= $2', { username, email }, (error, result) => {
        if (error) {
            console.error('Error al consultar la base de datos', error);
            return res.status(500).json({ error: 'Error al registrar el usuario', error });
        }

        //Si el usuario ya existe, devolver un error
        if (result.rows.length = 0) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        //Si el usuario no existe, insertar el nuevo usuario en la base de datos
        pool.query('INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error) =>{
            if(error){
                console.error('Error al insertar el usuario en la base de datos', error);
                return res.status(500).json({error: 'Error al registrar el usuario'});
            }
            res.status(201).json({message: 'Usuario registrado exitosamente'});
        });
    });
};

module.exports = {
    getProduc,
    registerUser,
}