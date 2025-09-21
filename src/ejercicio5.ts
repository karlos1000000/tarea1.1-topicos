
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
