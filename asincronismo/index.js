(async () => {
  const lorem1 = "Aliqua est duis consectetur ad.";
  const lorem2 =
    "Irure consequat in voluptate eu elit consequat non cillum qui dolor nulla qui occaecat.";
  const lorem3 = "Amet anim velit Lorem sit eu sint consectetur amet.";
  const lorem4 = "Elit ipsum pariatur velit laborum nostrud.";

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
          resolve(); //finalizamos la ejecución de recorrerTexto resolviendo el promise
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

  await recorrerTexto(lorem1, () => {
    console.log("Recorrido del texto 1 finalizado");
    console.log("================================");

    //Sin especificar valor para el parámetro "tiempo" de modo
    //que se use el valor por defecto
  });
  await recorrerTexto(
    lorem2,
    () => {
      console.log("Recorrido del texto 2 finalizado");
      console.log("================================");
    },
    500
  );
  await recorrerTexto(
    lorem3,
    () => {
      console.log("Recorrido del texto 3 finalizado");
      console.log("================================");
    },
    250
  );
  await recorrerTexto(
    lorem4,
    () => {
      console.log("Recorrido del texto 4 finalizado");
      console.log("================================");
    },
    100
  );

  //2) Encadenando la resolución de los promises usando .then()

  // recorrerTexto(lorem1, 1000, () => {
  //   console.log("Recorrido del texto 1 finalizado");
  // }).then(() => {
  //   recorrerTexto(lorem2, 1000, () => {
  //     console.log("Recorrido del texto 2 finalizado");
  //   }).then(() => {
  //     recorrerTexto(lorem3, 1000, () => {
  //       console.log("Recorrido del texto 3 finalizado");
  //     });
  //   });
  // });
})();
