const crearId = () => Date.now();

const formateador = (objeto) => {
  const { nombre, importe, stock, id } = objeto;

  return {
    nombre,
    importe,
    stock,
    id
  };
};

module.exports = {
  formateador,
  crearId
};