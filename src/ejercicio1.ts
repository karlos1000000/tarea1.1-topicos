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


