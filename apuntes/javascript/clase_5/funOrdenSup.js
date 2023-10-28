let personas = [
    { id: 1, nombre: "Florida", apellido: "Halfhyde", edad: 17 },
    { id: 2, nombre: "Gerrilee", apellido: "Jozsika", edad: 15 },
    { id: 3, nombre: "Howie", apellido: "Binnion", edad: 23 },
    { id: 4, nombre: "Odo", apellido: "Gian", edad: 20 },
    { id: 5, nombre: "Milissent", apellido: "Stede", edad: 30 },
    { id: 6, nombre: "Christiano", apellido: "Boldero", edad: 16 },
    { id: 7, nombre: "Aundrea", apellido: "McGaugey", edad: 16 },
    { id: 8, nombre: "Bianka", apellido: "Braybrook", edad: 20 },
    { id: 9, nombre: "Dougy", apellido: "Tull", edad: 25 },
    { id: 10, nombre: "Duke", apellido: "Stallon", edad: 16 },
    { id: 11, nombre: "Maurene", apellido: "Scoggans", edad: 21 },
    { id: 12, nombre: "Krissy", apellido: "Balaam", edad: 25 },
    { id: 13, nombre: "Jens", apellido: "Scrivenor", edad: 17 },
    { id: 14, nombre: "Legra", apellido: "Astlatt", edad: 28 },
    { id: 15, nombre: "Spenser", apellido: "Crippin", edad: 27 },
    { id: 16, nombre: "Carla", apellido: "Vinnicombe", edad: 16 },
    { id: 17, nombre: "Obidiah", apellido: "Caddock", edad: 18 },
    { id: 18, nombre: "Manon", apellido: "Radborn", edad: 23 },
    { id: 19, nombre: "Bruis", apellido: "Dunnaway", edad: 16 },
    { id: 20, nombre: "Shem", apellido: "Treece", edad: 30 }
];

let perros = [
    { raza: "Labrador Retriever", tamaño: "Grande", color: "Amarillo" },
    { raza: "Bulldog Francés", tamaño: "Pequeño", color: "Blanco y negro" },
    { raza: "Dachshund", tamaño: "Pequeño", color: "Marrón" },
    { raza: "Golden Retriever", tamaño: "Grande", color: "Dorado" },
    { raza: "Poodle", tamaño: "Mediano", color: "Blanco" }
];




// forEach Recorre todo mi array de punta a punta y hace lo que tenga que hacer
perros.forEach(
    function (per) {
        // console.log(per)
    }
)

let mayores = personas.filter(
    function (persona) {
        return persona.edad > 18
    }
)


let buscarPersona = personas.find(
    function (persona) {
        return persona.nombre.toLowerCase() === 'florida'
    }
)

console.log(buscarPersona)

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
    return x * 2;
});

// Para mostrar ventana emergente usamos alert

// para ver en consola usamos console.log

// para ver en html usamos innerText (para textos) innerHTML (para elementos HTML)

// numbers is still [1, 5, 10, 15]
// doubles is now [2, 10, 20, 30]


// crear variable que contendrá los datos en formato string
let personasHTML = ''

// Luego procesamos los datos y guardamos en la variable
personas.forEach(
    function (persona) {
        personasHTML += `<ul class="card-personas">
                            <li>${persona.id}</li>
                            <li>${persona.nombre}</li>
                            <li>${persona.apellido}</li>
                            <li>${persona.edad}</li>
                        </ul>`
    }
)


//Traemos el contenedor
let contenedor = document.querySelector('.personas')

console.log(personasHTML)
// Introducimos en ese contenedor la variable con los datos
contenedor.innerHTML = personasHTML


// Hacer los mismo con perros pero aplicando css
