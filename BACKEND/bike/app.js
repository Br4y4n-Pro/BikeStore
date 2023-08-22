const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const bodyParser = require('body-parser')

//Configuración de swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Configurar las rutas
const dataRoutes = require('./routes/dataRoutes');
app.use('/', dataRoutes);

//Dependendia de json npm install body-parser
app.use(bodyParser.json());
app.use('/', dataRoutes);
app.use('/getPersons', dataRoutes);

//Puerto en el que el servidor escuchará las peticiones
const puerto = 3050;

app.listen(puerto, () =>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
})