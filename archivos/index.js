const fs = require("fs");

(async () => {
  class Archivo {
    constructor(nombre) {
      this.nombre = nombre;
    }

    getFilePath() {
      return baseFileDir + this.nombre;
    }

    async leer() {
      try {
        console.log("Leyendo archivo...");
        const contenido = await fs.promises.readFile(this.getFilePath(), {
          encoding: "utf-8",
        });
        console.log(JSON.parse(contenido));
        console.log("Archivo leido.");
      } catch (error) {
        console.log(error);
      }
    }

    async guardar(producto) {
      try {
        console.log("Guardando producto...");
        productosArchivo.push({ id: productosArchivo.length + 1, ...producto });
        await fs.promises.writeFile(
          this.getFilePath(),
          JSON.stringify(productosArchivo)
        );
        console.log("Producto guardado.");
      } catch (error) {
        console.log(error);
      }
    }
    async borrar() {
      try {
        console.log("Borrando archivos...");
        await fs.promises.unlink(this.getFilePath());
        console.log("Archivo borrado.");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const baseFileDir = "./temp/";
  const productosArchivo = [];

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
  productos.forEach(async (prod) => await archivo.guardar(prod));
  await archivo.leer();
  await archivo.borrar();
  await archivo.leer();
})();
