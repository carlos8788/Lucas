let frutas = [
  { nombre: "Manzana", precio: 0.5, cantidad: 10 },
  { nombre: "Banana", precio: 0.3, cantidad: 5 },
  { nombre: "Naranja", precio: 0.7, cantidad: 8 },
  { nombre: "Mango", precio: 1.5, cantidad: 2 },
  { nombre: "Pera", precio: 0.8, cantidad: 4 }
];

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let numeros2 = [
//   {numero: 1, esp: 'uno', eng:'one'},
//   {numero: 2, esp: 'dos', eng:'two'},
//   {numero: 3, esp: 'tres', eng:'three'},
//   {numero: 4, esp: 'cuatro', eng:'four'},
//   {numero: 5, esp: 'cinco', eng:'five'},
//   {numero: 6, esp:'seis', eng:'six'},
// ]

// crear un objeto fruta que tenga nombre precio y cantidad

let palta = { nombre: "palta", precio: 0.80, cantidad: 3 }

// luego que esa nueva fruta agregarla al array frutas -> usar push

frutas.push(palta);
console.log(frutas);

// Usando la fruta creada usar los métodos de Object que 
// son Object.keys() y Object.values() VER EL EJEMPLO
// con un console.log() mostrar los resultados
/**
 * 
   let persona = { nombre: 'Juan', edad: 30 };
   let valores = Object.values(persona);


   let persona = { nombre: 'Juan', edad: 30 };
   let claves = Object.keys(persona);
 */
let valores = Object.values(palta);
console.log(valores);

let clave = Object.keys(palta);
console.log(clave);

console.log(palta.nombre)

// Quitar el primero

let eliminado = frutas.shift();
console.log(eliminado);
console.log(frutas);

// Quitar el último

let quitao = frutas.pop();
console.log(quitao);
console.log(frutas);

// Agregar al principio un elemento
// del tipo objeto como el del primer ejercicio

let frutilla = { nombre: "frutilla", precio: 2.00, cantidad: 12 }

frutas.unshift(frutilla)
console.log(frutas)

// EDICION DE ARRAYS

let numeros = [1, 2, 3]

numeros.push(4)

console.log(numeros)

numeros[0] = 100

console.log(numeros)

console.log(frutas)

frutas[2] = {nombre: 'Papaya', precio: .9, cantidad: 10}

console.log(frutas)

// EDICION DE OBJETOS

let papaya = frutas[2]
console.log(papaya)

papaya.precio = 1.9

console.log(papaya)

papaya['cantidad'] = 15

console.log(papaya)
