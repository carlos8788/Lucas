// const titulo = document.querySelector('.titulo');
// console.log(titulo.textContent);

// setTimeout(function () {
//     titulo.remove()
// }, 3000)

// let ladrillo = 'ladrillos macisos'
// const agua = 'agua'
// let pegamento = 'cemento'
// let arido = 'arena'

// let persona = {
//     nombre: 'Alfredo',
//     apellido: 'Paz',
//     edad: 29
// }

// let maquina = {
//     nombre: 'hormigonera',
//     potencia: '1hp',
//     motor: 'monofasico'
// }

// function hacerPared(metros) {
//     let cadaMetro = {
//         arena: 2,
//         cemento: 1,
//         agua: 10,
//         ladrillos: 50
//     }
//     let calculo = {
//         cantidadCemento: cadaMetro.cemento * metros,
//         cantidadArena: cadaMetro.arena * metros,
//         cantidadAgua: cadaMetro.agua * metros,
//         cantidadLadrillos: cadaMetro.ladrillos * metros
//     }
//     console.log(calculo)
// }

// hacerPared(10)


let persona = {
    nombre: 'Alfredo',
    apellido: 'Paz',
    edad: 29,
    casado: false
}

// console.log(persona)

persona.sexo = 'hombre'

// console.log(persona)

persona['fechaNacimiento'] = '10/10/1995'


let persona2 = {
    nombre: 'Juan',
    apellido: 'Cabrera',
    edad: 31,
    sexo: "hombre",
    fechaNacimiento: "02/05/1993",
    casado: true
}

let personas = [persona, persona2]
// console.log(personas)

function saludar() {
    console.log('Estoy saludando')
}

// saludar()
// saludar()


function saludo2(nombre) {
    console.log(`Hola, ${nombre} como estas?`)
}

// saludo2('Pedro')

function saludo3(nombre) {
    return `Hola, ${nombre}, Campeon como estas?`
}

let saludo = saludo3('Flavio')
// console.log(saludo)

// function mostrarResultado(funcion, a, b){
//     let resultado = funcion(a, b)
//     console.log(resultado)
// }

// function suma(a, b){
//     return a + b
// }

// function resta(a, b){
//     return a - b
// }

// function multiplicacion(a, b){
//     return a * b
// }

// mostrarResultado(resta, 10, 5)
// mostrarResultado(multiplicacion, 10, 5)


function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function multiplicacion(a, b) {
    return a * b
}

// console.log(suma(2, 12))
// console.log(suma(2, 50))


// VARIABLES
let variable = 'hola'
const constante = 3.1416

// estructura de datos
let listaPerros = ['sunny', 'drako', 'boby', 'locky']

let meli = {
    nombre: 'Melisa',
    edad: 33,
    sexo: 'femenino'
}

// funciones

function mostrar(nombre) {
    console.log(nombre)
}

mostrar(meli.nombre)
mostrar(meli['edad'])
mostrar(listaPerros[1])

// Ejercicio:
// Mostrar por consola el nombre de la mascota y 
// su dueño en un solo mensaje

let lucas = {
    nombre: 'Lucas',
    edad: 30,
    sexo: 'masculino'
}

let mascotas = [
    {

        duenio: 'Lucas',
        nombre: 'Drako'
    },

    {
        duenio: 'Lucas',
        nombre: 'Locky'
    },
    {
        duenio: 'Meli',
        nombre: 'Sunny'
    }
]

function mostrarMascotaDueño(nombreMascota, nombreDueño) {
    // console.log()
    // mostrar La mascota: drako, es de Lucas
}


// Mostrar por consola cuantas mascota tiene Lucas