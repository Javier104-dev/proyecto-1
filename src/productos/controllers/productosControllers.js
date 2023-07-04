const {
  verProductos: verProductosService,
  verProducto: verProductoService,
  crearProducto: crearProductoService,
  editarProducto: editarProductoService,
  eliminarProducto: eliminarProductoService
} = require("../services/productosService.js");

const verProductos = async (req, res) => {
  try {
    const productos = await verProductosService();
    res.status(200).json(productos);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await verProductoService(Number(id));
    res.status(200).json(producto);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const crearProducto = async (req, res) => {
  const { nombre, importe, stock } = req.body;

  try {
    const productoAgregado = await crearProductoService({ nombre, importe, stock });
    res.status(200).json({ msg: "Producto agregado", productoAgregado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, importe, stock } = req.body;

  try {
    const producto = await editarProductoService({ nombre, importe, stock, id: Number(id) });
    res.status(200).json({ msg: "Producto actualizado", producto });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminarProducto = async (req, res) => {
  const { id }  = req.params;

  try {
    const producto = await eliminarProductoService(Number(id));
    res.status(200).json({ msg: "Producto eliminado", producto });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  verProductos,
  verProducto,
  crearProducto,
  editarProducto,
  eliminarProducto
};