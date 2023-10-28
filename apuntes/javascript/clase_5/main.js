// let y const -> Variables
// if y else -> Condicionales
// while y for -> Ciclos
// function -> nos sirve para no repetir codigo 
// arrays y objetos -> Estructuras de datos

function escribirPizarron(frase, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(`${frase} - ${i}`)
    }
}
const FRASE = 'No debo encerrrar en el baño a milkhouse'
const FRASE_2 = 'Otras cosas'
let numero = 10

// escribirPizarron(FRASE, numero)
// escribirPizarron(FRASE_2, numero)

let arrayLista = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arrayLista)


let autos = [
    {
        marca: 'Volkswagen',
        color: 'azul',
        anio: '2020',
        modelo: 'Gol',
        motor: {
            cilindrada: 1200,
            cv: 1900,
            velMax: '190km',
            consumo: '1L por 12km',
            valvulas: '16v'
        },
        combustible: ['nafta', 'GNC'],
        patente: 'DEF123',
        ceroKM: false
    },
    {
        marca: 'Ford',
        color: 'blanco',
        anio: '2019',
        modelo: 'Fiesta',
        motor: {
            cilindrada: 1400,
            cv: 2100,
            velMax: '195km',
            consumo: '1L por 14km',
            valvulas: '16v'
        },
        combustible: ['nafta', 'diesel'],
        patente: 'XYZ456',
        ceroKM: false
    },
    {
        marca: 'Toyota',
        color: 'gris',
        anio: '2022',
        modelo: 'Yaris',
        motor: {
            cilindrada: 1500,
            cv: 2200,
            velMax: '200km',
            consumo: '1L por 13km',
            valvulas: '16v'
        },
        combustible: ['nafta', 'híbrido'],
        patente: 'JKL789',
        ceroKM: true
    },
    {
        marca: 'Chevrolet',
        color: 'negro',
        anio: '2017',
        modelo: 'Corsa',
        motor: {
            cilindrada: 1300,
            cv: 1900,
            velMax: '180km',
            consumo: '1L por 11km',
            valvulas: '16v'
        },
        combustible: ['nafta', 'GNC'],
        patente: 'MNO123',
        ceroKM: false
    },
    {
        marca: 'Hyundai',
        color: 'plateado',
        anio: '2021',
        modelo: 'Accent',
        motor: {
            cilindrada: 1400,
            cv: 2000,
            velMax: '195km',
            consumo: '1L por 14km',
            valvulas: '16v'
        },
        combustible: ['nafta'],
        patente: 'PQR456',
        ceroKM: true
    },
    {
        marca: 'Renault',
        color: 'verde',
        anio: '2023',
        modelo: 'Clio 3',
        motor: {
            cilindrada: 1100,
            cv: 1800,
            velMax: '170km',
            consumo: '1L por 15km',
            valvulas: '16v'
        },
        combustible: ['nafta'],
        patente: 'CFA010',
        ceroKM: true
    },
    {
        marca: 'Fiat',
        color: 'rojo',
        anio: '2018',
        modelo: 'Argo',
        motor: {
            cilindrada: 1300,
            cv: 2000,
            velMax: '200km',
            consumo: '1L por 10km',
            valvulas: '16v'
        },
        combustible: ['nafta', 'GNC'],
        patente: 'ABC010',
        ceroKM: false
    }
];

function mostrarDatos(objetos) {
    let autos = ''
    let nuevos = ''
    let usados = ''
    for (let i = 0; i < objetos.length; i++) {
        autos += `<div class="card-auto">
            <h3>${objetos[i].modelo}</h3>
            <h4>${objetos[i].marca}</h4>
            <h4>${objetos[i].anio}</h4>
            <h4>${objetos[i].color}</h4>
        </div>`;
        console.log(Number(objetos[i].anio) === 2023)
        if(Number(objetos[i].anio) === 2023){
            nuevos += `<div class="card-auto cero">
            <h3>${objetos[i].modelo}</h3>
            <h4>${objetos[i].marca}</h4>
            <h4>${objetos[i].anio}</h4>
            <h4>${objetos[i].color}</h4>
            </div>`;
        }
        else {
            usados += `<div class="card-auto usado">
            <h3>${objetos[i].modelo}</h3>
            <h4>${objetos[i].marca}</h4>
            <h4>${objetos[i].anio}</h4>
            <h4>${objetos[i].color}</h4>
            </div>`;
        }

    }
    return [autos, usados, nuevos]
}

// mostrarDatos(autos, 'modelo')
// mostrarDatos(autos, 'anio')
// mostrarDatos(autos, 'patente')

// Ahora, "autos" es un array que contiene los objetos de automóviles mencionados.

// document 

let contenedor = document.querySelector('#autos')
let contenedorCeroKM = document.querySelector('#autosNuevos')
let contenedorUsados = document.querySelector('#usados')

let arrayAutos = mostrarDatos(autos)
// contenedor.innerText La propiedad innerText no interpreta etiquetas HTML
contenedor.innerHTML = arrayAutos[0]
contenedorUsados.innerHTML = arrayAutos[1]
contenedorCeroKM.innerHTML = arrayAutos[2]
console.log(mostrarDatos(autos))

// contenedorCeroKM.innerHTML = mostrarCeroKM(autos)