const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(generarProducto()));
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

const generarProducto = () => {
  return {
    id: generarId(),
    title: `Producto ${generarId()}`,
    price: "$" + generarPrecio(),
    thumbnail: `Foto ${generarId()}`,
  };
};

const generarId = () => {
  return Math.floor(Math.random() * 10 + 1).toFixed(0);
};

const generarPrecio = () => {
  return (Math.random() * 9999.99).toFixed(2);
};
