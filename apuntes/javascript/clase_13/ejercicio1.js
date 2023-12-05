const pokes = [
    {
        name: "bulbasaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        name: "ivysaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        name: "venusaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        name: "charmander",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        name: "charmeleon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        name: "charizard",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        name: "squirtle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        name: "wartortle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        name: "blastoise",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    }
]

// convertir los nombres en nombres propios -> ejemplo: blastoise -> Blastoise

let pokemon = 'pidgeot'
let urlBlastoise = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"

function capitalize(poke) {
    let pokeArray = poke.split('')
    pokeArray[0] = pokeArray[0].toUpperCase()
    let result = pokeArray.join('')
    return result
}

// Obtener el ID de la url que tiene cada pokemon
function obtenerNumero(url) {
    let splitText = url.split('/')
    let subUrl = splitText[splitText.length - 1]
    let subArray = subUrl.split('.')
    return subArray[0]
}


// Encontrar pokemon 
function encontrarPokemon(pokemon, listaPokemones) {
    let pokeEncontrado = 'No encontrado'

    pokemon = pokemon.toLowerCase()

    listaPokemones.forEach(poke => {
        if (pokemon.includes(poke.name)) {
            pokeEncontrado = poke.name
        }

    })
    console.log(pokeEncontrado)
    // Modificar funcion usando concat par mostrar por consola,
    // no solo el nombre sino devolver la frase "pokemon encontrado: ${nombre}"
}



// Cargar al HTML

// Obtenemos el elemento del DOM (contenedor)

const contenedor = document.querySelector('.contenedor')

let contenido = ''

pokes.forEach(pokemon => {
    contenido += `<div>
                    <h2>${capitalize(pokemon.name)}</h2>
                    <img src="${pokemon.url}" alt="${pokemon.name}">
                    <p>ID: ${obtenerNumero(pokemon.url)}</p>
                  </div>`
})

contenedor.innerHTML = contenido


// Formulario para saber si está el pokemon

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const data = new FormData(event.target)

    const pokeFormulario = Object.fromEntries(data)

    // Colocar Función
    // pokeFormulario === Pokemon del array de pokes
    encontrarPokemon(pokeFormulario.poke, pokes)
})










