import { Calculo } from "./calculo";
import { ICalculo } from "./icalculo";
export default class Suma extends Calculo implements ICalculo {
  constructor(argumento1: number, argumento2: number) {
    super(argumento1, argumento2);
  }

  resultado(): number {
    if (isNaN(this.argumento1) || isNaN(this.argumento2))
      throw "Los argumentos son inválidos";
    return this.argumento1 + this.argumento2;
  }
}
