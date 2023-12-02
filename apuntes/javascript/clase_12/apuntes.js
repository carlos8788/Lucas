// MANERAS DE OBTENTER ELEMENTOS DE HTML
// document.
/**
 * document.querySelector
 * document.querySelectorAll
 * document.getElement* (hay varios getElement)
 */

// const botones = document.querySelectorAll('button')

// botones.forEach(function(boton){
//     boton.style.backgroundColor = 'red';
//     boton.style.color = 'white';
// })

// const input = document.querySelector('input');
// const boton = document.querySelector('button');


// --------------    EVENTOS    -----------------


// input.value = 'Algo'
// let nombre = ''
// // input.addEventListener('input', function(event){
// //     nombre = event.target.value
// // })
// boton.addEventListener('click', function(event){
//     console.log(input.value)
//     input.value = '';
// })

const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const datos = new FormData(event.target);

    const objeto = Object.fromEntries(datos);

    imprimirEnMayus(objeto.nombre)
    formulario.reset();
})

// CREAR ELEMENTOS HTML O AGREGAR FUNCIONES

function imprimirEnMayus(texto){
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = `<h1>${texto.toUpperCase()}</h1>`
}