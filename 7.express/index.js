import express from "express";
import { Archivo } from "../5.archivos/archivo.class.js";

const app = express();

const config = {
  port: 8080,
};

let contadorItems = 0,
  contadorItemRandom = 0;

const arch = new Archivo("productos.txt");

app.get("/items", async (req, res) => {
  console.log("Endpoint de items invocado.");
  const contenido = await arch.leer();
  const response = {
    items: contenido,
    cantidad: contenido.length,
  };
  contadorItems++;

  res.json(response);
});

app.get("/item-random", async (req, res) => {
  console.log("Endpoint de item random invocado.");
  const contenido = await arch.leer();
  const randomIndex = Math.floor(Math.random() * contenido.length);
  contadorItemRandom++;
  res.json(contenido[randomIndex]);
});

app.get("/visitas", (req, res) => {
  console.log("Endpoint de visitas invocado.");
  res.json({
    items: contadorItems,
    itemRandom: contadorItemRandom,
  });
});

const server = app.listen(config.port, () => {
  console.log("Servidor iniciado");
});
