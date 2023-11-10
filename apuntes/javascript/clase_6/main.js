// Objetos

const persona = {
    nombre: 'Lucas',
    apellido: 'Perez Gonzalez',
    edad: 29,
    solteroski: true
}
const pokemones = [
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

// Arrays y ciclos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayObjetos = [persona]
// console.log(arrayObjetos)
// arrayObjetos.forEach(obj => console.log(obj))


// Entrada de Datos

const entrada = document.querySelector('.buscarPokemon')
const contenedor = document.querySelector('.contenedorPokes')

entrada.addEventListener('input', function (e) {
    let texto = e.target.value
    const resultado = pokemones.filter(function (pokemon) {
        return pokemon.name.includes(texto)
    })
    contenedor.innerHTML = ''
    resultado.forEach(function (pokemon) {
        let nombrePoke = document.createElement('h2')
        nombrePoke.textContent = pokemon.name
        contenedor.appendChild(nombrePoke)

        let imgPoke = document.createElement('img')
        imgPoke.src = pokemon.url
        contenedor.appendChild(imgPoke)
    })
})





// console.log(resultado)




// Procesamiento de datos

// Salida de datos