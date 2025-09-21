
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
  console.log(`Nombre de Usuario: ${usuario.nombre}`);
  console.log(`Edad de Usuario: ${usuario.edad}`);
  if (usuario.email) {
    console.log(`Email de Usuario: ${usuario.email}`);
  }
  console.log(`++++++++++++++++++++++++++++++++++++++`);
  console.log(`\n`);
};

imprimirUsuario(usuario2);
imprimirUsuario(usuario1);
