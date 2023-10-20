// let numero = 1

// console.log(numero)

// numero = 2
// console.log(numero)

// numero = 2 + numero

// numero = 15 + numero

// numero = 'aveztruz' + numero

// console.log(numero)

// const LUCAS = 'Lucas'

// let cadena = '1)'

// // cadena = cadena + 'Lucas'
// cadena += 'Lucas'

// cadena += ' Fernando'

let cadena = '          Perez '

console.log(cadena)
// cadena.length devuelve la longitud
console.log(cadena.length)

// cadena.trim() eliminar todos los espacios que existen en los extremos
cadena = cadena.trim()
console.log(cadena)
console.log(cadena.length)

// cadena.includes() verifica si la letra 
// que se pasa como parametro está en el string
// si hay coincidencia devuelve "true" sino "false"
console.log(cadena.includes('e'));


// remplaza la primera coincidencia
console.log(cadena.replace('e', 'a'));

// concatena todos los strings que se pasa como parametro
console.log(cadena.concat(' mundo', ' todo', ' lo', ' que se te ocurra'))

