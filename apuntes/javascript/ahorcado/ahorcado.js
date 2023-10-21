/// APUNTES HASTA LA CLASE 3 PARA REALIZAR EL JUEGO DEL AHORCADO

let palabra = 'pato'

let longitudPalabra = palabra.length

let resultado = '';
for (let i = 0; i < longitudPalabra; i++) {
    resultado += '_ ';
}
console.log(resultado);
// resultado = ''
// console.log(resultado);
// console.log(resultado.length);
/**
 * casillero1 = (_ )
 * casillero2 = (_ )
 * casillero3 = (_ )
 * casillero4 = (_ )
 */
let intentos = 0
while (intentos < 4) {
    let letra = prompt('Ingrese una letra')
    let verificaLetra = palabra.includes(letra)


    if (verificaLetra) {
        // console.log(palabra.indexOf(letra))
        let indice = palabra.indexOf(letra) * 2
        resultado[indice] = letra
        resultado = ''
        for (let i = 0; i < longitudPalabra; i++) {
            if (i === palabra.indexOf(letra)) {
                resultado += `${letra} `
            } else {
                resultado += '_ ';
            }
        }
        console.log(resultado);
    }
    intentos++
    console.log(intentos, 'intentos')
}
