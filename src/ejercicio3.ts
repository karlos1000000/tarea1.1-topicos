// TAREA 1.1

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