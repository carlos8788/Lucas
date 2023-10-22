// INDICES DE STRINGS
// Para acceder a un caracter lo hacemos por medio de su indice
// Colocando corchetes luego de la variable
// Ejemplo -> let variable = 'abcdefghijklmnopqrstuvwxyz'
//                console.log(variable[10]) -> nos devuelve la letra K


// const APELLIDO = 'Perez'

// console.log(APELLIDO.length)
// console.log(APELLIDO[4])

// for (let i = 0; i < APELLIDO.length; i++) {
//     console.log(APELLIDO[i])
// }
let variable = 'abcdefghijklmnopqrstuvwxyz';

// REPASO
// console.log(variable.replace('z', '50'))
// console.log(variable.includes('a'))
// console.log(variable.concat('123456'))
// console.log(variable.trim())

// NUEVOS METODOS
// slice nos sirve para obtener un subconjunto del string original
// console.log(variable.slice(0, 4))

// Nos  devuelve el indice del caracter que buscamos
// console.log(variable.indexOf('z'))

// Convierte el string todo a mayuscula
// console.log(variable.toUpperCase())

let variable2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// Convierte el string todo a minuscula
// console.log(variable2.toLowerCase()) 


//  FUNCIONES

let nombre = 'luis'

// let primeraLetra = nombre[0]
// let restoDeLetras = nombre.slice(1, nombre.length)

// primeraLetra = primeraLetra.toUpperCase()

// nombre = primeraLetra.concat(restoDeLetras)
// console.log(nombre)

// let apellido = 'perez'

// let primeraLetraA = apellido[0]
// let restoDeLetrasA = apellido.slice(1, apellido.length)

// primeraLetraA = primeraLetraA.toUpperCase()

// apellido = primeraLetraA.concat(restoDeLetrasA)
// console.log(apellido)

// let apodo = 'yiyo'

function capitalizar(palabra) {
    let primeraLetra = palabra[0]
    let restoDeLetras = palabra.slice(1, palabra.length)

    primeraLetra = primeraLetra.toUpperCase()

    palabra = primeraLetra.concat(restoDeLetras)
    console.log(palabra)
}

// capitalizar('luis')
// capitalizar('carlos')
// capitalizar('perez')
// capitalizar('gonzalez')


let suma;
let resta;

let numero1 = 10;
let numero2 = 30;
let numero3 = 40;
let numero4 = 50;

// console.log(numero1 + numero2)
// console.log(`Usted está sumando: ${numero1} + ${numero2}`)
// console.log(numero1 + numero3)
// console.log(`Usted está sumando: ${numero1} + ${numero3}`)
// console.log(numero1 + numero2)
// console.log(`Usted está sumando: ${numero1} + ${numero4}`)
suma = numero1 + numero3
suma = numero1 + numero4


resta = numero1 - numero2
resta = numero1 - numero3
resta = numero1 - numero4

// let mostrarCartel = prompt('Que tiene que hacer')

// function sumar(x, y){
//     console.log(`Usted está sumando: ${x} + ${y}`)
//     console.log(x + y)
// }

function funcionCuadratica(a, b, c) {
    /**
     * "a" es el termino cuadratico
     * "b" es el termino lineal
     * "c" es el termino independiente
     */
    let numerador1 = b * (-1) + (b * b - 4 * a * c) ** (1 / 2)
    let numerador2 = b * (-1) - (b * b - 4 * a * c) ** (1 / 2)
    let denominador = 2 * a
    let x1 = numerador1 / denominador
    let x2 = numerador2 / denominador
    console.log('estoy dentro de la funcion')
    return `las raices son ${x1} y ${x2}`
}

// let resultado = funcionCuadratica(1, 0, -1)
// console.log(resultado)

// let resultado;
// console.log(resultado)

// Arrays (listas)
// Como propiedades principales:
// La lista tiene indice y es ordenada

let lista = [
    'Draco', 
    'bobo', 
    'mia', 
    'corazon', 
    'locky'
]
// console.log(lista.length)

// Elimina el ultimo elemento
console.log(lista.pop())
//Elimina el primer elemento
console.log(lista.shift())

// Copiar una lista --> hay mas maneras
let lista2 = lista
console.log(lista2)

// push() – Inserta un elemento al final del arreglo.
let blanquita = 'blanquita'
lista.push(blanquita)
console.log(lista);

//el caracter que se pase como parametro (se puede no pasar ningun, solo comillas)
// join() une todos los elementos de una lista unido según 
let texto = lista.join('')
console.log(texto)

// includes() verifica si el elemento que se busca existe en la lista
console.log(lista.includes('locky'))

// indexOf() devuelve el indice del elemento donde se encuentra, en caso de no encontrar nada devuelve -1
console.log(lista.indexOf('bobo'))


// Objetos
// No es ordenado, no tiene indice pero tiene propiedad o clave

let lucas = { 
    primerNombre: 'Lucas',
    segundoNombre: 'Fernando',
    primerApellido: 'Perez', 
    segundoApellido: 'Gonzalez', 
    edad: 29, casado: false, 
    deporte: 'Furbol', 
    domicilio: 'Av siempre viva 123', 
    dni: 38155723,
    apodo: ['unudo', 'chango', 'lucifer']
}

