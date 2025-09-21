// TAREA 1.1

// EJERCICIO 1
console.log(`EJERCICIO 1`);

enum EstadoProducto {
  Disponible = "Disponible",
  Agotado = "Agotado",
  Descontinuado = "Descontinuado",
}

type IDProducto = string | number;

interface Producto {
  id: IDProducto;
  nombre: string;
  precio: number;
  estado: EstadoProducto;
  descripcion?: string;
}

const mostrarDetallesProducto = (producto: Producto): void => {
  console.log(`++++++++++++++++++++++++++++++++++++++`);
  console.log(`ID del producto: ${producto.id}`);
  console.log(`Nombre del producto: ${producto.nombre}`);
  console.log(`Precio del producto: ${producto.precio}`);
  console.log(`Estado del producto: ${producto.estado}`);
  if (producto.descripcion) {
    console.log(`Descripción del producto: ${producto.descripcion}`);
  }
  console.log(`++++++++++++++++++++++++++++++++++++++`);
  console.log(`\n`);
};

const producto1: Producto = {
  id: 1,
  nombre: "Camiseta",
  precio: 200,
  estado: EstadoProducto.Disponible,
  descripcion: "Camiseta 100% Algodón",
};

const producto2: Producto = {
  id: "2",
  nombre: "Pantalón",
  precio: 500,
  estado: EstadoProducto.Agotado,
};

mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);

// EJERCICIO 2
console.log(`EJERCICIO 2`);

interface Usuario {
  nombre: string;
  edad: number;
  email?: string;
}

const usuario1: Usuario = {
  nombre: "Carlos",
  edad: 40,
  email: "carlos@gmail.com",
};

const usuario2: Usuario = {
  nombre: "Roberto",
  edad: 30,
};

const imprimirUsuario = (usuario: Usuario): void => {
  console.log(`++++++++++++++++++++++++++++++++++++++`);
  console.log(`Precio del producto: ${usuario.nombre}`);
  console.log(`Estado del producto: ${usuario.edad}`);
  if (usuario.email) {
    console.log(`Descripción del producto: ${usuario.email}`);
  }
  console.log(`++++++++++++++++++++++++++++++++++++++`);
  console.log(`\n`);
};

imprimirUsuario(usuario2);

// EJERCICIO 3
console.log(`EJERCICIO 3`);
console.log(`++++++++++++++++++++++++++++++++++++++`);
const repetirNombre = (nombre: string, veces: number): string[] => {
  const resultado: string[] = [];
  for (let i = 0; i < veces; i++) {
    resultado.push(nombre);
  }
  return resultado;
};

console.log(repetirNombre("Juan", 3));
console.log(repetirNombre("Lillian", 5));
console.log(`++++++++++++++++++++++++++++++++++++++`);
console.log(`\n`);

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

// EJERCICIO 5
console.log(`EJERCICIO 5`);
console.log(`++++++++++++++++++++++++++++++++++++++`);

enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}

const esFinDeSemana = (diaSemana: DiaSemana): boolean => {
  switch (diaSemana) {
    case DiaSemana.Sabado:
    case DiaSemana.Domingo:
      return true;
    default:
      return false;
  }
};

console.log(esFinDeSemana(DiaSemana.Domingo));
console.log(esFinDeSemana(DiaSemana.Lunes));
console.log(esFinDeSemana(DiaSemana.Sabado));
console.log(`++++++++++++++++++++++++++++++++++++++`);
