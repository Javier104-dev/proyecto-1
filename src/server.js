const express = require("express");
const { router: rutas } = require("./productos/routes/productosRoutes.js");
const { HOST, PORT } = require("./config/config.js");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(rutas);

server.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}/productos`);
});