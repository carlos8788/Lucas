const timeVerde = 20;
const timeNaranja = 2;
const timeRojo = 10;

let dia = 11;

let calle = undefined;

// También tenemos valores del tipo indefindo o nullish 

// null, undefined, NaN

// el objeto console, tiene métodos como el "log" "warn" y "error" que nos permite visualizar
// nuestras variables e ir verificando el funcionamiento

// console.log(timeVerde)
// console.warn(calle)
// console.error(timeRojo)


// prompt --> Sirve para pedirle al usuario que ingrese un dato

// let dato1 = prompt('Ingrese un dato')
// let dato2 = prompt('Ingrese otro dato')

// Cuando prompt recibimos el dato en formato string entonces para poder sumar, debemos
// parsear los datos a números con el método "Number"
// let suma = Number(dato1) + Number(dato2);

// console.log(suma)


// Y para pasar de número a texto usamos toString
let numeroPrueba = 100
// console.log(numeroPrueba)

numeroPrueba = numeroPrueba.toString()
// console.log(numeroPrueba)

// console.log("10"+" 20"+" 30")
// console.log(10 + 20)
// console.log("true")

// Usemos alert en lugar de console

let dato1 = prompt('Ingrese un dato')
let dato2 = prompt('Ingrese otro dato')
let suma = Number(dato1) + Number(dato2);

alert(`Su suma es: ${suma}`)