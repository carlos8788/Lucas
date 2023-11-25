// TRAEMOS LOS ELEMENTOS
const formulario = document.querySelector('#formulario');
const km = document.querySelector('#km');
const pies = document.querySelector('#pies');
const millas = document.querySelector('#millas');

// FUNCIONES 
function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function metrosAKilometros(metros) {
    const kilometros = metros / 1000;
    return kilometros;
}

function metrosAPies(metros) {
    const pies = metros * 3.28084;
    return pies;
}
function metrosAMillas(metros) {
    const millas = metros * 0.000621371;
    return millas;
}



formulario.addEventListener('submit', function (event) {
    /**
     * TRABAJAMOS CON EL FORMULARIO
     */

    // PRIMERO
    event.preventDefault()

    // SEGUNDO 
    let datos = new FormData(event.target);

    // TERCERO

    let objeto = Object.fromEntries(datos)

    // ULTIMO

    // Como convertir un dato string a numero
    // Number -> Number(dato)

    /**
     * APLICAMOS LA LOGICA PARA MANIPULAR LOS DATOS
     */

    let dato = Number(objeto.metros)

    // let valor = restar(Number(objeto.numero1), Number(objeto.numero2))
    // let valorSumado = sumar(Number(objeto.numero1), Number(objeto.numero2))
    
    let aMillas = metrosAMillas(dato)
    let aPies = metrosAPies(dato)
    let aKilometros = metrosAKilometros(dato)

    /**
     * MOSTRAMOS LOS DATOS
     */
    // resultado.innerText -> 'Resultado'
    km.innerText = km.innerText.concat(' ', aKilometros, ' km')
    pies.innerText = pies.innerText.concat(' ', aPies, ' pies')
    millas.innerText = millas.innerText.concat(' ', aMillas, ' millas')


})