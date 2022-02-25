(async () => {
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
    las únicas dos formas (descubiertas hasta el momento) de que se 
    puedan hacer consecutivas y sincrónicas las ejecuciones de 
    recorrida de texto son:
  */

  // 1) Usando una IIFE global async (ver línea 1)
  //    NOTA: De ésta manera no es posible contar la cantidad de palabras
  //    totales de todas las pasadas sin usar variables globales

  // await recorrerTexto(lorem1, (cantidadPalabras) => {
  //   console.log("Recorrido del texto 1 finalizado");
  //   console.log("================================");

  //   //Sin especificar valor para el parámetro "tiempo" de modo
  //   //que se use el valor por defecto
  // });
  // await recorrerTexto(
  //   lorem2,
  //   (cantidadPalabras) => {
  //     console.log("Recorrido del texto 2 finalizado");
  //     console.log("================================");
  //   },
  //   500
  // );
  // await recorrerTexto(
  //   lorem3,
  //   (cantidadPalabras) => {
  //     console.log("Recorrido del texto 3 finalizado");
  //     console.log("================================");
  //   },
  //   250
  // );

  //2) Encadenando la resolución de los promises usando .then()

  recorrerTexto(lorem1, () => {
    console.log("Recorrido del texto 1 finalizado");
  }).then((cantidadPalabras) => {
    let cantidadTotal = cantidadPalabras;
    recorrerTexto(
      lorem2,
      () => {
        console.log("Recorrido del texto 2 finalizado");
      },
      500
    ).then((cantidadPalabras2) => {
      cantidadTotal += cantidadPalabras2;
      recorrerTexto(
        lorem3,
        () => {
          console.log("Recorrido del texto 3 finalizado");
        },
        250
      ).then((cantidadPalabras3) => {
        cantidadTotal += cantidadPalabras3;
        console.log(
          `Proceso completo. Cantidad total de palabras: ${cantidadTotal}`
        );
      });
    });
  });
})();
