// EJERCICIOS 
// https://javascript.espaciolatino.com/evaluar/arrays_objetos.html

//EJERCICIO 1
const diasSemana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

// console.table(diasSemana)

//EJERCICIO 2

let diasHabiles = diasSemana.slice(0, 5)
console.log(diasHabiles)
const diasNoHabiles = diasSemana.slice(5, 7)
// const diasNoHabiles = diasSemana.slice(-2)
// console.log(diasNoHabiles)

diasHabiles = diasHabiles.map(function (dia) {

    return dia.toUpperCase()
})

// console.table(diasHabiles)

//EJERCICIO 3

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const par = []
const impar = []

numeros.forEach(function (numero) {
    if (numero % 2 === 0) {
        par.push(numero)
    } else {
        impar.push(numero)
    }
})

// console.table(par)
// console.table(impar)

const valor = numeros.find(function(numero){
    if(numero === 1){
        return numero
    }
})
console.log(valor)