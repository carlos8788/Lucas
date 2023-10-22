/// APUNTES HASTA LA CLASE 3 PARA REALIZAR EL JUEGO DEL AHORCADO

let palabra = 'jirafa'
let resultado = ''
for (let i = 0; i < palabra.length; i++) {
    resultado += '_ '
}
resultado = resultado.split(' ')
resultado.pop()

function convertirPalabraALista(palabraRecibida) {
    return palabraRecibida.split('')
}

function verficarLetra(lista) {
    let variable = prompt('Ingrese una letra')
    let letraAVerificar = lista.includes(variable)
    if (letraAVerificar) {
        return variable
    }
    else {
        return false
    }

}

function mostrarResultado(lista, letra) {

    // console.log(resultado)
    for(let i= 0; i< lista.length; i++){
        let indice = lista.indexOf(letra)
        resultado[indice] = lista[indice]
    }

    resultado = resultado.join(' ')
    console.log(resultado)
    resultado = resultado.split(' ')

}

let listaPalabra = convertirPalabraALista(palabra)

let intentos = 0

alert('Bienvenidos al juego del ahorcado, tenes 4 oportunidades de fallar')
while (intentos < 4) {
    
    let letraPalabra = verficarLetra(listaPalabra)
    
    if (letraPalabra) {
        mostrarResultado(listaPalabra, letraPalabra)
        if (!resultado.includes('_')) {
            console.log('GANASTE')
            break
        }
    } else {

        intentos++
        console.log(`Te quedan ${4 - intentos}`)
        if(intentos === 4){
            console.log('PERDISTE LELO')
        }

    }
}