// Tipos de datos primitivos
//  tipo de comentarios 
// numericos -> number
// cadenas -> string (texto)
// booleana -> boolean (un tipo de dato es true o false)


// como declarar datos -> A traves de variables o constantes
// Nombres de variables se escriben en minuscula y las constantes se pueden escribir en mayuscula y minuscula

// CONSTANTES
const PI = 3.14
const NOMBRE = 'Lucas'
const SEGUNDO_NOMBRE = "Fernando"
const APELLIDO = `Perez`

// VARIABLES

// var edad = 29 -> ya casi no se utiliza esta declaración
// let edad = 29

let edad = 29
let cantidadDeMascotas = 4
let cantidadDeFamiliares = 3
let hijos = 0

// Usted tiene hijos? -> false 

let valorDeVerdad = false 


// PARA TRABAJAR EN LA CONSOLA DEL NAVEGADOR

// console 
let oracion = NOMBRE + ' ' + SEGUNDO_NOMBRE + ' ' + APELLIDO + ' ' + edad
console.log(oracion)

let oracionCorregida = `${NOMBRE} ${SEGUNDO_NOMBRE} ${APELLIDO}, Edad:${edad}`
console.log(oracionCorregida) // Manera correcta de trabajar

// console.log('Lucas Fernando Perez')

console.error('esto es un error')
console.warn('Esto es una advertencia')


// PARA TRABAJAR EN EL HTML que muestra el navegador

// document (funcion interna de JS)

// TRAER elementos de HTML por medio del ID
// document.getElementById()

const seccion = document.getElementById('seccion') // se puede guardar como variable (let) o como constante (const)

// seccion es un elemento section (etiqueta section)

// innerText: podemos introducir texto a una etique HTML

seccion.innerText = oracionCorregida

// innerHTML: podemos introducir etiquetas al HTML

// seccion.innerHTML = '<h2>Soy un h2</h2>'
seccion.innerHTML = `<h2 class="estiloJS">${oracionCorregida}</h2>`


const articulos = document.getElementById('clase0')

// let divs = ''

// for (let i = 0; i <20 ; i++) {
//     divs = divs + `<div>Soy el div numero ${i}</div>` 
// }
// articulos.innerHTML = divs