// Arrays (listas)

// La lista se declaa entre corchetes

let lista = [];

const LISTA_FIJA = ['Luis', 'Lucas']
const pasajeros = [
    'persona1', 
    'persona2', 
    'persona3', 
    'persona4', 
]

let nombres = [
    "Juan",
    "María",
    "Pedro",
    "Ana",
    "Carlos",
    "Laura",
    "Luis",
    "Sofía",
    "Diego",
    "Valentina",
    "Javier",
    "Camila",
    "Andrés",
    "Isabella",
    "Miguel",
    "Lucía",
    "Felipe",
    "Juana",
    "Gabriel",
    "Paula",
    "Alejandro",
    "Victoria",
    "Ricardo",
    "Daniela",
    "Hugo",
    "Valeria",
    "Sebastián",
    "Catalina",
    "José",
    "Emma",
    "Lucas",
  ];

// propiedades de la lista

// console.log(nombres); // Obtenemos toda la lista

// Si quiero obtener un nombre en especial, le pasamos el indice de la siguiente manera
// console.log(nombres[0]) //-> Voy a recibir el primer elemento
// console.log(nombres[1])  
// console.log(nombres[2])  

// Como saber la longitud de mi lista, es decir, cuantos elementos tiene mi lista
// console.log(nombres.length)



// Como recorrer toda la lista

// metodo tradicional
// for (let i=0; i<nombres.length; i++){
//     console.log(nombres[i])
// }

// Con forEach
// nombres.forEach(persona => console.log(persona))

// Sirve para agregar un elemento al final de mi lista
nombres.push('Beto')

// console.log(nombres)

// Eliminar al último elemento de la lista
nombres.pop()



// console.log(nombres)
// Insertamos la lista a nuestro documento HTMl
const listaHTML = document.getElementById('lista')
let listaNombres = ''
nombres.forEach(persona => {    
    listaNombres = listaNombres + `<li>${persona}</li>`
})

// console.log(listaNombres);
listaHTML.innerHTML = listaNombres


// CONDICIONALES Y OPERADORES 

// PODEMOS GENERAR CODIGO que se ejecute según una condicion

// tenemos el "if" "else" y "else if"

const luis = 19

// if (luis > 18){ // 'SI pasa esto ejecuta este codigo'
//     console.log('si')
// }
// else if (luis === 18){ // SINO SI ejecuta este otro codigo
//     console.log('tiene 18')
// }
// else{ // SIno se cumple ninguna de las anteriores ejecuta este codigo
//     console.log('No')
// }

// OPERADORES

// ===  COMPARATIVO ESTRICTO---> quiere decir igual estricto
// Ejemplo 
// console.log(3==='3'); //false
// console.log(3===3); //true

// NO COMPARAMOS ASÍ, ya que esta comparacion no es exacta
// console.log(3=='3');


// < menor, > mayor, >= mayor igual y <= menor igual
// console.log(3>5) //false
// console.log(3<5) //true

// COMPARACION  SI ES DISTINTO 
// !== 
// console.log(2!==2) //false
// console.log('luis' === 'luis'); // true


// Operador negacion 
// ! --> Solamente el signo de exclamación de cierre

console.log(!true) // false


