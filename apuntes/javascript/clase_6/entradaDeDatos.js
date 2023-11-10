// Eventos

// input 

// primero vamos a traer el elemento input

const entradaDeTexto = document.querySelector('#entradaDeTexto')

// addEventListener
// elemento | agregar evento | primer argumento -> evento | segundo argumento funcion anonima
entradaDeTexto.addEventListener('input', function(event){
    // Acá se captura el texto introducido
    console.log(event.target.value)

})


// botones 

const boton = document.querySelector('.btn')

boton.addEventListener('click', function(){
    console.log('Soy un button')
})

const elemento = document.createElement('h2')
elemento.textContent = 'Aparezco al presionar el botón'


// Ejercicio
// Agregar un elemento al hacer click en un botón


// boton.addEventListener('click', function(){
//     let element = document.querySelector('h2')
//     console.log(element)
//     if(element){
//         console.log(true)
//         titulo.remove()
//     }else{
//         boton.after(elemento)

//     }
// })


// Formulario

const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e){

    e.preventDefault()

    const datos = new FormData(e.target)

    const objetoDatos = Object.fromEntries(datos)

    console.log(objetoDatos.nombre)

});