let texto = 'Lorem ipsum dolor sit amet, consectetur adip     '

// length: Devuelve la longitud (número de caracteres) de una cadena.

console.log(texto.length)

// charAt(): Devuelve el carácter en una posición específica de la cadena.

console.log(texto.charAt(0))

// charCodeAt(): Devuelve el valor Unicode del carácter en una posición específica de la cadena.

console.log(texto.charCodeAt('43'))

// concat(): Combina dos o más cadenas y devuelve una nueva cadena.

let texto2 = 'anda la osa'

console.log(texto.concat(' ', texto2))

// slice(): Devuelve una parte de la cadena como una nueva cadena, especificando un inicio y un final.

console.log(texto.slice(0, 10))

// substring(): Similar a slice(), pero no permite valores negativos.

console.log(texto.substring(0, 10))

// substr(): Devuelve una parte de la cadena comenzando desde una posición y con una longitud específica.

console.log(texto.substr(0, 10))

// indexOf(): Devuelve la primera posición en la que se encuentra un carácter o una subcadena en la cadena, o -1 si no se encuentra.

console.log(texto.indexOf('e'))

// lastIndexOf(): Similar a indexOf(), pero comienza la búsqueda desde el final de la cadena hacia el principio.

console.log(texto.lastIndexOf('a'))

// replace(): Reemplaza una subcadena con otra en la cadena.

console.log(texto.replace('ipsum', 'homero'))

// toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas.

console.log(texto.toUpperCase())

// toLowerCase(): Convierte todos los caracteres de la cadena a minúsculas.

console.log(texto.toLowerCase())

// trim(): Elimina los espacios en blanco (u otros caracteres especificados) al principio y al final de la cadena.

console.log(texto.trim())

// split(): Divide una cadena en un array de subcadenas basándose en un delimitador especificado.

console.log(texto.split(' '))

// startsWith(): Comprueba si la cadena comienza con una subcadena específica.

console.log(texto.startsWith('homero'))
console.log(texto.startsWith('Lorem'))

// endsWith(): Comprueba si la cadena termina con una subcadena específica.

console.log(texto.endsWith('homero'))
console.log(texto.endsWith(' '))

// includes(): Comprueba si la cadena contiene una subcadena específica.

console.log(texto.includes('homero'))
console.log(texto.includes('Lorem'))
