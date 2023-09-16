const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo');

boton.addEventListener('click', function() {
    if (titulo.innerText === 'Hola Mundo'){
        titulo.innerHTML = '<strong>Chau Mundo</strong>';
        titulo.style = 'color: red;';
    }
    else {
        titulo.innerHTML = 'Hola Mundo';
        titulo.style = 'color: blue;';
    }
})

