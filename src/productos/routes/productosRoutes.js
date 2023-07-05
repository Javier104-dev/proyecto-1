const express = require("express");
const {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto,
  paginaNoEncontrada
} = require("../controllers/productosControllers.js");

const router = express.Router();

const ROUTE_BASE = "/productos";

router.get(`${ROUTE_BASE}`, verProductos);
router.get(`${ROUTE_BASE}/:id`, verProducto);
router.post(`${ROUTE_BASE}`, crearProducto);
router.put(`${ROUTE_BASE}/:id`, editarProducto);
router.delete(`${ROUTE_BASE}/:id`, eliminarProducto);
router.use('*', paginaNoEncontrada);

module.exports = {
  router
};
