// .clase
// #id
// etiqueta
// const main = document.querySelector('main')

// const section = document.createElement('section')

// main.append(section)

// const elementoDIV1 = document.createElement('div')
// const elementoDIV2 = document.createElement('div')
// const elementoDIV3 = document.createElement('div')

// elementoDIV1.innerHTML = '<h1>ABC</h1>'
// elementoDIV2.innerHTML = '<h1>DEF</h1>'
// elementoDIV3.innerHTML = '<h1>GHI</h1>'


// section.append(elementoDIV3)
// elementoDIV3.before(elementoDIV1)
// elementoDIV3.after(elementoDIV2)

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
// entrada
const main = document.querySelector('main')


// proceso
// poke = [{clave: 'string'},{clave: 'string'}, {clave: 'string'}]

// let lista = [1, 2, 3, 4]
let texto = ''

pokes.forEach(function(pokemon){
    texto += `<div class="poke">
                 <h2>${pokemon.name}</h2>
                 <img src="${pokemon.url}" alt="${pokemon.name}">
             </div>`
})

// salida
main.innerHTML = texto




/**
 * 
 * 
 * 
 * 
 */