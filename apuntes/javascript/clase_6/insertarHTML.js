// Para traer un elemento usarmos querySelector
const main = document.querySelector('.contenedor');
console.log(main)
// Introduce texto dentro del elemento seleccionado
// main.innerText = 'Repaso gral, eventos y formularios';

// Introduce un elemento según lo que tenga valor de la
// propiedad innerHTML
// main.innerHTML = '<h2> Repaso gral y eventos </h2>';




// Creando elementos de una manera más práctica

// createElement

const subtitulo = document.createElement('h2')

// El texto que va a contener
subtitulo.textContent = 'Soy un subtitulo'

// Agrega al final de su contenedor
// main.appendChild(subtitulo)




// Agrega dada una referencia

// traemos el elemento de referencia 

const section = document.querySelector('section')
const article = document.querySelector('article')

// Con before, llamamos a la referencia
// como parametro pasamos el nuevo elemento
// y elemento se colocará antes de la referencia
section.before(subtitulo)

// con after hacemos lo opuesto
// el elemento se colocará después de la referencia
// section.after(subtitulo)



