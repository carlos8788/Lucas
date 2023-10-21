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

capitalizar('luis')
capitalizar('carlos')
capitalizar('perez')
capitalizar('gonzalez')
