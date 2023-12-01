// function unaFuncion(){
    // Ejecuto código pero no devuelvo nada
// }

// function funcionConRetorno(){
    // ejecuto código y retorno algo
    // return 'algo';
    // return false;
    // return true;
    // return [1, 2, 3, 4]
// }

// FUNCIONES CON PARAMETROS

// h**2 = c1**2 + c2**2

function calculoHipotenusa(cateto1, cateto2){
    let sumaDeCatetos = cateto1 * cateto1 + cateto2 * cateto2
    let hipotenusa = sumaDeCatetos ** (1/2)
    return hipotenusa
}


function areaRectangulo(base, altura){
    let area = base * altura
    return area
}

function areaTriangulo(base, altura){
    return (base * altura)/2
}

function volumenCubo(base, altura, ancho){
    return base * altura * ancho
}

function calculoVolumenEsfera(radio){
    const PI = 3.14159265358979323846
    return (4/3) * PI * (radio**3)
}

function aTrapecio(baseMayor, baseMenor, altura){
    return ((baseMayor + baseMenor) * altura)/2
}


const hipotenusa = document.querySelector('#hipotenusa')
const rectangulo = document.querySelector('#rectangulo')
const triangulo = document.querySelector('#triangulo')
const trapecio = document.querySelector('#trapecio') // TAREA
const cubo = document.querySelector('#cubo') // TAREA
const esfera = document.querySelector('#esfera') // TAREA

const formularioContenedor = document.querySelector('#contenedor')

function formularioDosInput(input1, input2){
    return `
            <label for="${input1}">${input1.toUpperCase()}</label>
            <input type="number" name="${input1}" id="id-${input1}">
            <label for="${input2}">${input2.toUpperCase()}</label>
            <input type="number" name="${input2}" id="id-${input2}">
            <button type="submit" id="calculo">Calular</button>
           `
}

// TAREA REALIZAR FORMULARIOS DE 3 y 1 INPUT


hipotenusa.addEventListener('click', function(event){
    event.preventDefault()
    formularioContenedor.innerHTML = formularioDosInput('cateto1', 'cateto2')
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    formularioContenedor.addEventListener('submit', function(event){
        event.preventDefault()

        let data = new FormData(event.target)

        let objeto = Object.fromEntries(data)

        let unCateto = Number(objeto.cateto1)
        let otroCateto = Number(objeto.cateto2)

        let valorH = calculoHipotenusa(unCateto, otroCateto)
    
        resultado.innerHTML = `<h2>La hipotenusa es: ${valorH}</h2>`
    });
})


rectangulo.addEventListener('click', function(event){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    event.preventDefault()
    formularioContenedor.innerHTML = formularioDosInput('base', 'altura')

    formularioContenedor.addEventListener('submit', function(event){
        event.preventDefault()

        let data = new FormData(event.target)

        let objeto = Object.fromEntries(data)

        let base = Number(objeto.base)
        let altura = Number(objeto.altura)

        let valor = areaRectangulo(base, altura)

        resultado.innerHTML = `<h2>El area del rectangulo es: ${valor}</h2>`
    });
})

triangulo.addEventListener('click', function(event){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    event.preventDefault()
    formularioContenedor.innerHTML = formularioDosInput('base', 'altura')//

    formularioContenedor.addEventListener('submit', function(event){
        event.preventDefault()

        let data = new FormData(event.target)

        let objeto = Object.fromEntries(data)

        let base = Number(objeto.base) // 
        let altura = Number(objeto.altura) //

        let valor = areaTriangulo(base, altura) //

        resultado.innerHTML = `<h2>El area del triangulo es: ${valor}</h2>` //
    });
})

