const express = require("express");
const path = require("path");
require('dotenv').config();
const {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto,
} = require("./database/productosServices.js");

const server = express();
const ruta = path.join(__dirname, "./database/data.json");

server.use(express.json());

server.get("/productos", async (req, res) => {
  try {
    const productos = await verProductos(ruta);
    res.status(200).json(productos);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.get("/productos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await verProducto(ruta, Number(id));
    res.status(200).json(producto);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.post("/productos", async (req, res) => {
  const { nombre, importe, stock } = req.body;

  try {
    const productoAgregado = await crearProducto(ruta, { nombre, importe, stock });
    res.status(200).json({ msg: "Producto agregado", productoAgregado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.put("/productos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, importe, stock } = req.body;

  try {
    const producto = await editarProducto(ruta, { nombre, importe, stock, id: Number(id) });
    res.status(200).json({ msg: "Producto actualizado", producto });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.delete("/productos/:id", async (req, res) => {
  const { id }  = req.params;

  try {
    const producto = await eliminarProducto(ruta, Number(id));
    res.status(200).json({ msg: "Producto eliminado", producto });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.use('*', (req, res) => {
  res.status(404).json({ 404: 'Pagina no encontrada' });
});

server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/productos`);
});