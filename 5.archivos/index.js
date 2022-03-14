import { Archivo } from "./archivo.class.js";

(async () => {
  const productos = [
    {
      price: 234.56,
      title: "Hamburguesas Paty",
      thumbnail:
        "https://static.cotodigital3.com.ar/sitios/fotos/full/00510200/00510292.jpg",
    },
    {
      price: 345.67,
      title: "Dulce de leche clasico La Serenisima",
      thumbnail:
        "https://static.cotodigital3.com.ar/sitios/fotos/full/00510300/00510306.jpg",
    },
    {
      price: 456.78,
      title: "Vino Cabernet Fond de Cave",
      thumbnail:
        "https://static.cotodigital3.com.ar/sitios/fotos/full/00004400/00004473.jpg",
    },
  ];

  const archivo = new Archivo("productos.txt");
  //Para ilustrar mejor el ejercicio hacemos todo sincrónico en una IIFE async
  //para poder mostrar mejor cada paso.

  for (const prod of productos) {
    await archivo.guardar(prod);
  }

  await archivo.leer();
  await archivo.borrar();
  await archivo.leer();
})();
