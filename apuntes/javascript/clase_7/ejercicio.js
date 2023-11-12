// Datos primitivos //

const NOMBRE = 'Luis'
const APELLIDO = 'Perez'

// estructura de datos //

// Array que contiene objetos

const personas = [
    {
        nombre: 'Luis',
        apellido: 'Perez'
    },
    {
        nombre: 'Lucas',
        apellido: 'Perez'
    },
    {
        nombre: 'Carlos',
        apellido: 'Perez'
    }
]

// Funciones //
// contenedor
const contPersonas = document.querySelector('#contenedor-personas')

// elemento
const persona = document.createElement('h3')


// contenido del elemento
persona.textContent = `${personas[1].nombre} ${personas[1].apellido}`
// console.log(personas[2])

// insertar el elemento
// contenedor.append(elemento)
// contPersonas.append(persona)

function crearPersonas(pers){
    const contenedor = document.querySelector('#contenedor-personas')
    const elemento = document.createElement('h3')
    elemento.textContent = `${pers.nombre} ${pers.apellido}`
    contenedor.append(elemento)
}


/**
 * function sumar(a, b){
 * const suma = a + b
 *  console.log(suma)
 * }
 */

function resta(a, b) {
    const resta = a - b
    console.log(resta)
}
// resta(10, 8)
// resta(10, 7)
// resta(100, 7)
// resta(104, 7)

// return
// let entrada = prompt('Introduzca un texto')
// console.log(entrada)

function restaCorrecta(a, b) {
    const resta = a - b
    return resta
}

let resta1 = restaCorrecta(10, 8)
restaCorrecta(10, 7)
let resta2 = restaCorrecta(100, 7)
restaCorrecta(104, 7)


function mayorA5(numero){
    console.log(numero)
    if (numero > 5){
        console.log('mayor que 5')
    } else {
        console.log('menor que 5')
    }
}

// metodo o funcion forEach 

personas.forEach(personas => crearPersonas(personas))




// FORMULARIO

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    const data = new FormData(e.target)

    const persona = Object.fromEntries(data)
    console.log(persona)
    crearPersonas(persona)
    formulario.reset()
})
