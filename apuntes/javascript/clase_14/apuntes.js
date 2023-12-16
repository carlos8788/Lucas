const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.

numeros.push(10)
console.log(numeros)


// pop(): Elimina el último elemento de un array y lo devuelve.

numeros.pop()

console.log(numeros)

// shift(): Elimina el primer elemento de un array y lo devuelve, desplazando los elementos restantes hacia una posición inferior.

numeros.shift()

console.log(numeros)

// unshift(): Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

numeros.unshift(1)

console.log(numeros)


// concat(): Combina dos o más arrays y devuelve un nuevo array que contiene los elementos de los arrays combinados.

const numerosNegativos = [-1, -2, -3]

const nuevoArray = numeros.concat(numerosNegativos)
console.log(nuevoArray)

// slice(): Devuelve una copia superficial de una porción de un array en un nuevo array. No modifica el array original.

const arraySlice = nuevoArray.slice(2, 10) // segundo parametro es donde corta, pero no lo toma a ese elemento
console.log(arraySlice)

// splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos en una ubicación específica.
console.log(numeros)
numeros.splice(0, 5)
console.log(numeros)

// ------------    funciones de orden superior    --------------------- //
// ------------    reciben una funcion anonima como parametro    --------------------- //

// forEach(): Ejecuta una función proporcionada una vez para cada elemento del array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5]

numbers.forEach(function(num){
    console.log(num)
})

const retorno = numbers.forEach(function(num){
    let doble = num**2
    console.log(doble)
    return doble
})

console.log(numbers)
console.log(retorno)

// map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.

const retorno2 = numbers.map(function(num){
    let doble = num**2
    console.log(doble)
    return doble
})
console.log(retorno2)
console.log(numbers)

// filter(): Crea un nuevo array con todos los elementos que pasen una prueba (función) proporcionada.

const filtro1 = numbers.filter(function(num){
    if(num > 4){
        return num
    }
})

const filtro2 = numbers.map(function(num){
    if(num > 4){
        return num
    }
})

console.log(filtro1)
console.log(filtro2)

// find(): Devuelve el primer elemento del array que cumple con una prueba (función) proporcionada.

const elemento = numbers.find(function(num){
    if(num === 5){
        return num
    }
})
const elemento2 = numbers.filter(function(num){
    if(num === 5){
        return num
    }
})

console.log(elemento)
console.log(elemento2)


// findIndex(): Devuelve el índice del primer elemento del array que cumple con una prueba (función) proporcionada.

const index = numbers.findIndex(function(num){
    if(num === 5){
        return num
    }
})

const index2 = numbers.findIndex(function(num){
    if(num === 500){
        return num
    }
})

console.log(index)
console.log(index2)

// some(): Comprueba si al menos un elemento del array cumple con una prueba (función) proporcionada.

const busqueda = semana.some(function(dia){
    // if(dia === 'marzo'){
    //     return dia
    // }
    if(dia === 'lunes'){
        return dia
    }
})

console.log(busqueda)

// every(): Comprueba si todos los elementos del array cumplen con una prueba (función) proporcionada.

const prueba1 = semana.every(function(dia){
    if(dia.length > 3){
        return dia
    }
})
console.log(prueba1)

const prueba2 = numbers.every(function(num){
    if(num > 100){
        return num
    }
})

console.log(prueba2)

// reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

const reductor = numbers.reduce(function(actual, i){
    return actual * i
})

const reductor2 = semana.reduce(function(actual, i){
    return actual + i
})

console.log(reductor)
console.log(reductor2)

// sort(): Ordena los elementos de un array en su lugar y devuelve el array ordenado.

semana.sort()
console.log(semana)

// reverse(): Invierte el orden de los elementos de un array en su lugar y devuelve el array invertido.

semana.reverse()

console.log(semana)

// join(): Convierte todos los elementos de un array en una cadena y la devuelve.

const cadena = semana.join('-')
console.log(cadena)

// indexOf(): Devuelve el primer índice en el que se encuentra un elemento en el array, o -1 si no se encuentra

const indice = numbers.indexOf(5)
console.log(indice)