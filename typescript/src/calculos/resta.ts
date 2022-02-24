import { Calculo } from "./calculo";

export default class Resta extends Calculo {
  constructor(argumento1: number, argumento2: number) {
    super(argumento1, argumento2);
  }

  protected resultado(): number {
    if (isNaN(this.argumento1) || isNaN(this.argumento2))
      throw "Los argumentos son inválidos";
    return this.argumento1 - this.argumento2;
  }
}
