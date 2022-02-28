const lorem1 = "Aliqua est duis consectetur ad.";
const lorem2 =
  "Irure consequat in voluptate eu elit consequat non cillum qui dolor nulla qui occaecat.";
const lorem3 = "Amet anim velit Lorem sit eu sint consectetur amet.";

const recorrerTexto = async (texto, callback, tiempo = 1000) => {
  const palabras = texto.split(" ");
  let i = 0;
  let interval = null;

  console.log(`Texto completo: ${texto}`);
  console.log(
    `Tiempo entre palabras: ${tiempo} mseg${
      tiempo === 1000 ? " (default)" : ""
    }`
  );

  return new Promise((resolve, reject) => {
    const mostrarPalabraPorTiempo = () => {
      console.log(`Palabra ${i + 1}: ${palabras[i]}`);
      i++;

      if (i === palabras.length) {
        clearInterval(interval); //finalizamos el setInterval
        callback(); //ejecutamos el callback
        resolve(palabras.length);
        //finalizamos la ejecución de recorrerTexto
        //resolviendo el promise y devolviendo la cantidad de palabras para
        //poder acumularlas y contar la cantidad de las 3 pasadas.
      }
    };

    interval = setInterval(mostrarPalabraPorTiempo, tiempo);
  });
};

/* 
    Como solo se permite el uso de await dentro de una función async
    las dos formas de que se puedan hacer consecutivas y sincrónicas 
    las ejecuciones de recorrida de texto son:
*/

// 1) Encerrando la ejecución de las llamadas en una función async

const mostrarPalabras = async () => {
  let cantidadTotal = 0;

  cantidadTotal += await recorrerTexto(lorem1, () => {
    console.log("Recorrido del texto 1 finalizado");
    console.log("================================");

    //Sin especificar valor para el parámetro "tiempo" de modo
    //que se use el valor por defecto
  });
  cantidadTotal += await recorrerTexto(
    lorem2,
    () => {
      console.log("Recorrido del texto 2 finalizado");
      console.log("================================");
    },
    500
  );
  cantidadTotal += await recorrerTexto(
    lorem3,
    () => {
      console.log("Recorrido del texto 3 finalizado");
      console.log("================================");
    },
    250
  );

  console.log(`Proceso completo. Cantidad total de palabras: ${cantidadTotal}`);
};

mostrarPalabras();

//2) Encadenando la resolución de los promises usando .then()
//
// recorrerTexto(lorem1, () => {
//   console.log("Recorrido del texto 1 finalizado");
//   console.log("================================");
// }).then((cantidadPalabras) => {
//   let cantidadTotal = cantidadPalabras;
//   recorrerTexto(
//     lorem2,
//     () => {
//       console.log("Recorrido del texto 2 finalizado");
//       console.log("================================");
//     },
//     500
//   ).then((cantidadPalabras2) => {
//     cantidadTotal += cantidadPalabras2;
//     recorrerTexto(
//       lorem3,
//       () => {
//         console.log("Recorrido del texto 3 finalizado");
//         console.log("================================");
//       },
//       250
//     ).then((cantidadPalabras3) => {
//       cantidadTotal += cantidadPalabras3;
//       console.log(
//         `Proceso completo. Cantidad total de palabras: ${cantidadTotal}`
//       );
//     });
//   });
// });
