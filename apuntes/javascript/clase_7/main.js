// const array = [];
// console.log(array)

// array.push('Luis')
// console.log(array)

const perro = {
    nombre: "draco",
    raza : "nike",
    edad:"2 meses",
    color : ["negro","blanco","marron"]
}

function crearElemento(paco){
    const contenedor = document.querySelector('#contenedor-personas')
    const elemento = document.createElement('h3')
    elemento.textContent = `nombre:${paco.nombre} 
     raza:${paco.raza}
     edad:${paco.edad} 
     color:${paco.color[1]}, ${paco.color[0]}, ${paco.color[2]}`
    contenedor.append(elemento)
}
crearElemento(perro)
console.log(perro.raza)