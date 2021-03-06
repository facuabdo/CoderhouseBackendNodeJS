/*
    Segundo entregable del curso de backend en NodeJS de Coderhouse
    Alumno: Facundo Abdo
    Profe: Mauricio Espinosa
    Comisión: 20655
    Tema: Nuevas funcionalidades de ECMAScript y Typescript
 */

import { ICalculo } from "./calculos/icalculo";

/*
  Definimos una ruta base para ir a buscar 
  las implementaciones para cada operación 
*/
const rutaBaseModuloCalculo = "./calculos/";

//Función que ejecuta una operación
const operacion = (
  num1: number,
  num2: number,
  tipoOperacion: string
): Promise<number> => {
  const promise: Promise<number> = new Promise(async (resolve, reject) => {
    //Definimos una lista de operaciones permitidas
    const operacionesPermitidas = ["suma", "resta"];

    //Si la operación está en la lista se intenta la ejecución
    if (operacionesPermitidas.includes(tipoOperacion)) {
      //Generamos la ubicación del módulo dinámicamente y lo importamos
      let tipoCalculo = await import(rutaBaseModuloCalculo + tipoOperacion);
      try {
        //Creamos la instancia de la clase importada dinámicamente
        const calculo: ICalculo = new tipoCalculo.default(num1, num2);
        //Ejecutamos la operación
        resolve(calculo.resultado());
      } catch (e) {
        //Manejamos errores
        reject(e);
      }
    }

    reject("La operación no está permitida");
  });

  return promise;
};

//Función que invoca la ejecución de las operaciones
const operaciones = async () => {
  try {
    let resultado1: number = await operacion(1, 2, "suma");
    console.log(`El resultado de la operación 1 es ${resultado1}`);
  } catch (e) {
    console.log(e);
  }

  try {
    let resultado2: number = await operacion(2, 1, "resta");
    console.log(`El resultado de la operación 2 es ${resultado2}`);
  } catch (e) {
    console.log(e);
  }

  try {
    let resultado3: number = await operacion(2, 1, "multiplicacion");
    console.log(`El resultado de la operación 3 es ${resultado3}`);
  } catch (e) {
    console.log(e);
  }
};

operaciones();
