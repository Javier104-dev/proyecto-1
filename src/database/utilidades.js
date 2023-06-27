const crearId = () => Date.now();

const formateador = (objeto) => {
  const { nombre, importe, stock, id } = objeto;

  return {
    nombre,
    importe: importe || 0,
    stock: stock || "Sin stock",
    id
  };
};

module.exports = {
  formateador,
  crearId
};