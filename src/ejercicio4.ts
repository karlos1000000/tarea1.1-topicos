
// EJERCICIO 4
console.log(`EJERCICIO 4`);
console.log(`++++++++++++++++++++++++++++++++++++++`);
class CuentaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(
        `Monto (${monto}) depositado con éxito. Saldo Actual: ${this.saldo}`
      );
    } else {
      console.error(`Error: Monto a depositar NO válido`);
    }
  }

  retirar(monto: number): void {
    if (monto <= this.saldo && monto > 0) {
      this.saldo -= monto;
      console.log(
        `Monto (${monto}) retirado con éxito. Saldo Actual: ${this.saldo}`
      );
    } else {
      console.error(`Error: Monto a retirar NO válido`);
    }
  }

  consultarSaldo(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo Actual: ${this.saldo}`);
  }
}

const cuenta1 = new CuentaBancaria("Urias Lobo");

cuenta1.consultarSaldo();
cuenta1.depositar(1000);
cuenta1.depositar(0);
cuenta1.depositar(-29);
cuenta1.depositar(50);
cuenta1.consultarSaldo();
cuenta1.retirar(500);
cuenta1.consultarSaldo();
cuenta1.retirar(500);
cuenta1.consultarSaldo();
console.log(`++++++++++++++++++++++++++++++++++++++`);
console.log(`\n`);