const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const yaml = require("js-yaml");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dataRoutes = require("./routes/dataRoutes");

app.use("/public", express.static(path.join(__dirname, "public")));


// Configuración de swagger
const swaggerDocument = yaml.load(fs.readFileSync("./swagger.yaml", "utf8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(bodyParser.json()); // Este middleware analiza los datos JSON entrantes
app.use("/", dataRoutes);

// Puerto en el que el servidor escuchará las peticiones

const puerto = process.env.PORT || 3050;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

