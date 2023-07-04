const fs = require("fs");
const path = require("path");

const rutaJson = path.join(__dirname, "productosData.json");

const leerJson = () => new Promise((resolve, reject) => {
  fs.readFile(rutaJson, "utf-8", (error, resultado) => {
    if (error) reject(new Error("No se pudo leer el Json"));

    resolve(JSON.parse(resultado));
  });
});

const escribirJson = (contenido) => new Promise((resolve, reject) => {
  fs.writeFile(rutaJson, JSON.stringify(contenido, null, 2), "utf-8", (error) => {
    if (error) reject(new Error("No se pudo escribir el Json"));

    resolve(true);
  });
});

module.exports = {
  escribirJson,
  leerJson,
};