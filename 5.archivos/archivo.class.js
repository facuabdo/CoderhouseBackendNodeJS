import fs from "fs";

export class Archivo {
  constructor(nombre, baseDir) {
    this.nombre = nombre;
    this.baseFileDir = baseDir ?? "";
    this.productosArchivo = [];
  }

  getFilePath() {
    return "./" + this.baseFileDir + "/" + this.nombre;
  }

  async leer() {
    try {
      console.log("Leyendo archivo...");
      const contenido = await fs.promises.readFile(this.getFilePath(), {
        encoding: "utf-8",
      });
      const contenidoJSON = JSON.parse(contenido);
      console.log(contenidoJSON);
      console.log("Archivo leido.");
      return contenidoJSON;
    } catch (error) {
      console.log(error);
    }
  }

  async guardar(producto) {
    try {
      console.log("Guardando producto...");
      this.productosArchivo.push({
        id: this.productosArchivo.length + 1,
        ...producto,
      });
      await fs.promises.writeFile(
        this.getFilePath(),
        JSON.stringify(this.productosArchivo)
      );
      console.log("Producto guardado.");
      return this.productosArchivo;
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
