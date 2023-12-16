// console.log("Hola mundo")
console.log("Hola mundo")

let mensaje = 'soy un mensaje nuevo'
console.log(mensaje)

console.log(mensaje.toUpperCase());

// length: Devuelve la longitud (número de caracteres) de una cadena.

// console.log(texto.length)

console.log(mensaje.length);

// charAt(): Devuelve el carácter en una posición específica de la cadena.

// console.log(texto.charAt(0))
console.log(mensaje.charAt(4))

// concat(): Combina dos o más cadenas y devuelve una nueva cadena.

let texto2 = 'anda la osa'

// console.log(texto.concat(' ', texto2))
console.log(mensaje.concat(' ',texto2))


const lista = ['homero', 'marge', 'bart', 'lisa', 'maggie']

// push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

lista.push('abraham')

console.log(lista)

// pop(): Elimina el último elemento de un array y lo devuelve.

lista.pop()

console.log(lista)


// shift(): Elimina el primer elemento de un array y lo devuelve, desplazando los elementos restantes hacia una posición inferior.

lista.shift()
console.log(lista)


// unshift(): Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

lista.unshift('paty')

console.log(lista)


const retorno = lista.forEach(function(personaje){
    console.log(personaje)
    return personaje
})

console.log(retorno)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5]

const retorno2 = numbers.map(function(num){
    let doble = num**2
    // console.log(doble)
    return doble
})
// console.log(retorno2)
// console.log(numbers)

// find -> buscar

const busqueda = lista.find(function(personaje){
    if(personaje === 'bart'){
        return personaje
    }
})


console.log(busqueda)


let listaDeNumeros = [14, 15, 93, 98, 58, 64, 66, 69, 43, 12, 12, 52, 33, 51, 88, 27, 40, 74, 41, 64, 72, 79, 86, 15, 36, 3, 99, 49, 55, 64, 19, 39, 57, 98, 58, 49, 12, 36, 20, 2, 95, 91, 52, 97, 78, 46, 46, 68, 100, 89, 41, 45, 93, 92, 57, 67, 85, 91, 58, 40, 93, 56, 52, 47, 3, 72, 43, 45, 13, 31, 48, 51, 100, 70]


const resultado2 = listaDeNumeros.find(function(num){
    if(num === 49){
        return num
    }
})

console.log(resultado2)

// filter 

const resultado = listaDeNumeros.filter(function(numero){
    if(numero % 2 === 0){
        return numero
    }
})

console.log(resultado)

const menores50 = listaDeNumeros.filter(function(numero){
    if(numero === 3){
        return numero
    }
})

console.log(menores50)


