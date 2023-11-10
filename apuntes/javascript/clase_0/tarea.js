// Crear una constante cualquiera y mostrarla por un console.log
const COSA = "COMPUTADORA"
console.log(COSA)

// Pedir por pront "Nombre y apellido " y luego mostrar una oracion mostrando los mismos

// let dato1 = prompt('Ingrese Nombre')
// let dato2 = prompt('Ingrese Apellido')

// const NOMBRE = "NOMBRE"
// const APELLIDO = "APELLIDO"

const NOMBRE = prompt("NOMBRE")
const APELLIDO = prompt("APELLIDO")

let oracionCorregida = `${NOMBRE}, ${APELLIDO}`
console.log(oracionCorregida)


// Pedir por pront "Edad" y devolver posible año de nacimiento 

//1º definir una constante edad 
const EDAD = prompt("EDAD")

//2º definir una variable que obtenga el año de nacimiento
const ANIO_ACTUAL = 2023

let resta = ANIO_ACTUAL - Number(EDAD);

//3º mostrar en consola

console.log(resta)