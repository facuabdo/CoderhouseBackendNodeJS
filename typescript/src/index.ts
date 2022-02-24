import { Calculo } from "./calculos/calculo";

const rutaBaseModuloCalculo = "./calculos/";

const operacion = (
  num1: number,
  num2: number,
  tipoOperacion: string
): Promise<number> => {
  const promise: Promise<number> = new Promise(async (resolve, reject) => {
    const operacionesPermitidas = ["suma", "resta"];

    if (operacionesPermitidas.includes(tipoOperacion)) {
      let tipoCalculo = await import(rutaBaseModuloCalculo + tipoOperacion);
      const delegate: Calculo = new tipoCalculo.default(num1, num2);
      resolve(delegate.resultado());
    }

    reject("La operación no está permitida");
  });

  return promise;
};

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
