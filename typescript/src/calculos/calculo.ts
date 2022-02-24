export abstract class Calculo {
  protected argumento1: number;
  protected argumento2: number;

  protected constructor(argumento1: number, argumento2: number) {
    this.argumento1 = argumento1;
    this.argumento2 = argumento2;
  }

  protected abstract resultado(): number;
}
