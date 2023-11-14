let frutas = [
    { nombre: "Manzana", precio: 0.5, cantidad: 10 },
    { nombre: "Banana", precio: 0.3, cantidad: 5 },
    { nombre: "Naranja", precio: 0.7, cantidad: 8 },
    { nombre: "Mango", precio: 1.5, cantidad: 2 },
    { nombre: "Pera", precio: 0.8, cantidad: 4 }
];

// Actualizar el precio de una fruta según su indice

// frutas[0].precio = 350
// console.log(frutas);
// frutas[2].precio = 500
// console.log(frutas);



function actualizarPrecio(arrayFrutas, indice, precioNuevo) {
    arrayFrutas[indice].precio = precioNuevo

}



actualizarPrecio(frutas, 4, 600)
actualizarPrecio(frutas, 0, 350)


function actualizarCanti(arrayFrutas, indice, cantidadNueva) {
    if (arrayFrutas.length - 1 <=indice){
        if(cantidadNueva > 0){
            arrayFrutas[indice].cantidad = cantidadNueva
        }
        else{
            console.log('La cantidad no puede ser menor a 0');
        }
    }else{
        console.log('El indice no es correcto');
    }
    

}

actualizarCanti(frutas, 0, 90)
actualizarCanti(frutas, 4, -20)

console.log(frutas.length);
console.log(frutas.length - 1);

// TAREA
// Condicionar para que el precio sea mayor a 0, y que el indice también no sea mayor al indice del ultimo elemento