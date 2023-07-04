const { leerJson, escribirJson } = require("../model/productosModel.js");
const { crearId, formateador } = require("../utilities/utilidades.js");

const verProductos = async () => {
  const productos = await leerJson();
  return productos;
};

const verProducto = async (id) => {
  if (!id) throw new Error("Id invalido");

  const productos = await leerJson();
  const producto = productos.find((elemento) => elemento.id === id);

  if (!producto) throw new Error("Producto no encontrado");

  return producto;
};

const crearProducto = async (producto) => {
  if (!producto.nombre || !producto.importe || !producto.stock) throw new Error("Datos imcompletos");

  const productos = await leerJson();
  const productoConId = { ...formateador(producto), id: crearId() };

  productos.push(productoConId);
  await escribirJson(productos);

  return productoConId;
};

const editarProducto = async (producto) => {
  if (!producto.nombre || !producto.importe || !producto.stock || !producto.id)  throw new Error("Datos imcompletos");

  const productos = await leerJson();
  const indice = productos.findIndex((elemento) => elemento.id === producto.id);

  if (indice < 0) throw new Error("El id no pertenece a un producto");

  productos[indice] = formateador(producto);
  await escribirJson(productos);

  return productos[indice];
};

const eliminarProducto = async (id) => {
  if (!id) throw new Error("El id no esta definido");

  const productos = await leerJson();
  const indice = productos.findIndex((elemento) => elemento.id === id);

  if (indice < 0) throw new Error("El id no pertenece a un producto registrado");

  const producto = productos[indice];
  productos.splice(indice, 1);
  await escribirJson(productos);

  return producto;
};

module.exports = {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto,
};