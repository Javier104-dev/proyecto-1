const express = require("express");
const {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto
} = require("../controllers/productosControllers.js");

const router = express.Router();

router.get('/productos', verProductos);
router.get('/productos/:id', verProducto);
router.post('/productos', crearProducto);
router.put('/productos/:id', editarProducto);
router.delete('/productos/:id', eliminarProducto);
router.use('*', (req, res) => {
  res.status(404).json({ 404: 'Pagina no encontrada' });
});

module.exports = {
  router
};
