const { leerJson, escribirJson } = require("./jsonFileHandler.js");
const { crearId, formateador } = require("./utilidades.js");

const verProductos = async (ruta) => {
  const productos = await leerJson(ruta);
  return productos;
};

const verProducto = async (ruta, id) => {
  if (!id) throw new Error("Id invalido");

  const productos = await leerJson(ruta);
  const producto = productos.find((elemento) => elemento.id === id);

  if (!producto) throw new Error("Producto no encontrado");

  return producto;
};

const crearProducto = async (ruta, producto) => {
  if (!producto.nombre || !producto.importe || !producto.stock) throw new Error("Datos imcompletos");

  const productos = await leerJson(ruta);
  const productoConId = { ...formateador(producto), id: crearId() };

  productos.push(productoConId);
  await escribirJson(ruta, productos);

  return productoConId;
};

const editarProducto = async (ruta, producto) => {
  if (!producto.id || !producto.nombre)  throw new Error("Datos imcompletos");

  const productos = await leerJson(ruta);
  const indice = productos.findIndex((elemento) => elemento.id === producto.id);

  if (indice < 0) throw new Error("El id no pertenece a un producto");

  productos[indice] = formateador(producto);
  await escribirJson(ruta, productos);

  return productos[indice];
};

const eliminarProducto = async (ruta, id) => {
  if (!id) throw new Error("El id no esta definido");

  const productos = await leerJson(ruta);
  const indice = productos.findIndex((elemento) => elemento.id === id);

  if (indice < 0) throw new Error("El id no pertenece a un producto registrado");

  const producto = productos[indice];
  productos.splice(indice, 1);
  await escribirJson(ruta, productos);

  return producto;
};

module.exports = {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto,
};