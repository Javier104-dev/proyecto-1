const fs = require("fs");

const leerJson = (ruta) => new Promise((resolve, reject) => {
  fs.readFile(ruta, "utf-8", (error, resultado) => {
    if (error) reject(new Error("No se pudo leer el Json"));

    resolve(JSON.parse(resultado));
  });
});

const escribirJson = (ruta, contenido) => new Promise((resolve, reject) => {
  fs.writeFile(ruta, JSON.stringify(contenido, null, 2), "utf-8", (error) => {
    if (error) reject(new Error("No se pudo escribir el Json"));

    resolve(true);
  });
});

module.exports = {
  escribirJson,
  leerJson,
};