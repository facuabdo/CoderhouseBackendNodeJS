/*
    Primer entregable del curso de backend en NodeJS de Coderhouse
    Alumno: Facundo Abdo
    Comisión: 30995
    Tema: Clases en ES6
 */

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros || []; //failsafe para que los arrays no sean undefined
    this.mascotas = mascotas || []; //failsafe para que los arrays no sean undefined
  }

  getFullName = () => {
    /*
        Devolvemos el nombre completo interpolando
        los valores de las variables usando template literals 
    */
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
  };

  addMascota = (nombreMascota) => {
    /*
        Agregamos una mascota al array de mascotas usando la función push
    */
    this.mascotas.push(nombreMascota);
  };

  countMascotas = () => {
    /*
        Acá simplemente devolvemos la longitud del array de mascotas 
    */
    console.log(`${this.nombre} tiene ${this.mascotas.length} mascota/s`);
  };

  addBooks = (nombre, autor) => {
    /*
        Agregamos un libro al array creando un 
        objeto anónimo con los valores pasados 
        por parámetro.
    */
    this.libros.push({
      nombre: nombre,
      autor: autor,
    });
  };

  getBookNames = () => {
    /* 
        Con la función map creamos un nuevo array basado
        en el original, con la misma cantidad de elementos
        pero con una estructura que definimos en el callback 
        interno 
    */
    console.log(`Los títulos de los libros de ${this.nombre} son`);
    console.log(
      this.libros.map((libro) => {
        return libro.nombre;
      })
    );
  };
}

const separador = () => {
  console.log("===============================================");
};

const saltoDeLinea = () => {
  console.log("\n");
};

saltoDeLinea();
console.log("*** Declaramos un usuario ***");
saltoDeLinea();

const facundo = new Usuario(
  "Facundo",
  "Abdo",
  [{ nombre: "Harry Potter", autor: "JK Rowling" }],
  ["Noche", "Tiznit"]
);
console.log(facundo);
saltoDeLinea();
separador();
console.log("Vemos su nombre completo");
facundo.getFullName();
separador();
console.log("Vemos su cantidad de mascotas");
facundo.countMascotas();
separador();
console.log("Vemos los títulos de sus libros");
facundo.getBookNames();
separador();

saltoDeLinea();
console.log("*** Ahora haremos algunas modificaciones ***");
saltoDeLinea();
console.log("Agregamos algunos libros [...]");
facundo.addBooks("El señor de los anillos", "JRR Tolkien");
facundo.addBooks("Juego de tronos", "George RR Martin");
console.log("Agregamos algunas mascotas [...]");
facundo.addMascota("Charlie");
facundo.addMascota("Lola");
console.log("Y ahora vemos los cambios en los valores:");
saltoDeLinea();

separador();
console.log("Vemos su cantidad de mascotas");
facundo.countMascotas();
separador();
console.log("Vemos los títulos de sus libros");
facundo.getBookNames();
separador();
