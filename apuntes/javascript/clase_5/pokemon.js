let pokemones = [
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
    },
    {
        name: "caterpie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        name: "metapod",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        name: "butterfree",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
        name: "weedle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
        name: "kakuna",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
        name: "beedrill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
        name: "pidgey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
        name: "pidgeotto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
        name: "pidgeot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
        name: "rattata",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
        name: "raticate",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
        name: "spearow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
        name: "fearow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
        name: "ekans",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
        name: "arbok",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
        name: "pikachu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
        name: "raichu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
        name: "sandshrew",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
        name: "sandslash",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
        name: "nidoran-f",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
        name: "nidorina",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
        name: "nidoqueen",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
        name: "nidoran-m",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
        name: "nidorino",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
        name: "nidoking",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
        name: "clefairy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
        name: "clefable",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
        name: "vulpix",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
        name: "ninetales",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
        name: "jigglypuff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
        name: "wigglytuff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
        name: "zubat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    },
    {
        name: "golbat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    },
    {
        name: "oddish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
        name: "gloom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    },
    {
        name: "vileplume",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    },
    {
        name: "paras",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    },
    {
        name: "parasect",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    },
    {
        name: "venonat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    },
    {
        name: "venomoth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    },
    {
        name: "diglett",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    },
    {
        name: "dugtrio",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    },
    {
        name: "meowth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    },
    {
        name: "persian",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    },
    {
        name: "psyduck",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    },
    {
        name: "golduck",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    },
    {
        name: "mankey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    },
    {
        name: "primeape",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    },
    {
        name: "growlithe",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
        name: "arcanine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    },
    {
        name: "poliwag",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    },
    {
        name: "poliwhirl",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    },
    {
        name: "poliwrath",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    },
    {
        name: "abra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    },
    {
        name: "kadabra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    },
    {
        name: "alakazam",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    },
    {
        name: "machop",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    },
    {
        name: "machoke",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    },
    {
        name: "machamp",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    },
    {
        name: "bellsprout",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    },
    {
        name: "weepinbell",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    },
    {
        name: "victreebel",
        url: "https://pokeapi.co/api/v2/pokemon/71/"
    },
    {
        name: "tentacool",
        url: "https://pokeapi.co/api/v2/pokemon/72/"
    },
    {
        name: "tentacruel",
        url: "https://pokeapi.co/api/v2/pokemon/73/"
    },
    {
        name: "geodude",
        url: "https://pokeapi.co/api/v2/pokemon/74/"
    },
    {
        name: "graveler",
        url: "https://pokeapi.co/api/v2/pokemon/75/"
    },
    {
        name: "golem",
        url: "https://pokeapi.co/api/v2/pokemon/76/"
    },
    {
        name: "ponyta",
        url: "https://pokeapi.co/api/v2/pokemon/77/"
    },
    {
        name: "rapidash",
        url: "https://pokeapi.co/api/v2/pokemon/78/"
    },
    {
        name: "slowpoke",
        url: "https://pokeapi.co/api/v2/pokemon/79/"
    },
    {
        name: "slowbro",
        url: "https://pokeapi.co/api/v2/pokemon/80/"
    },
    {
        name: "magnemite",
        url: "https://pokeapi.co/api/v2/pokemon/81/"
    },
    {
        name: "magneton",
        url: "https://pokeapi.co/api/v2/pokemon/82/"
    },
    {
        name: "farfetchd",
        url: "https://pokeapi.co/api/v2/pokemon/83/"
    },
    {
        name: "doduo",
        url: "https://pokeapi.co/api/v2/pokemon/84/"
    },
    {
        name: "dodrio",
        url: "https://pokeapi.co/api/v2/pokemon/85/"
    },
    {
        name: "seel",
        url: "https://pokeapi.co/api/v2/pokemon/86/"
    },
    {
        name: "dewgong",
        url: "https://pokeapi.co/api/v2/pokemon/87/"
    },
    {
        name: "grimer",
        url: "https://pokeapi.co/api/v2/pokemon/88/"
    },
    {
        name: "muk",
        url: "https://pokeapi.co/api/v2/pokemon/89/"
    },
    {
        name: "shellder",
        url: "https://pokeapi.co/api/v2/pokemon/90/"
    },
    {
        name: "cloyster",
        url: "https://pokeapi.co/api/v2/pokemon/91/"
    },
    {
        name: "gastly",
        url: "https://pokeapi.co/api/v2/pokemon/92/"
    },
    {
        name: "haunter",
        url: "https://pokeapi.co/api/v2/pokemon/93/"
    },
    {
        name: "gengar",
        url: "https://pokeapi.co/api/v2/pokemon/94/"
    },
    {
        name: "onix",
        url: "https://pokeapi.co/api/v2/pokemon/95/"
    },
    {
        name: "drowzee",
        url: "https://pokeapi.co/api/v2/pokemon/96/"
    },
    {
        name: "hypno",
        url: "https://pokeapi.co/api/v2/pokemon/97/"
    },
    {
        name: "krabby",
        url: "https://pokeapi.co/api/v2/pokemon/98/"
    },
    {
        name: "kingler",
        url: "https://pokeapi.co/api/v2/pokemon/99/"
    },
    {
        name: "voltorb",
        url: "https://pokeapi.co/api/v2/pokemon/100/"
    },
    {
        name: "electrode",
        url: "https://pokeapi.co/api/v2/pokemon/101/"
    },
    {
        name: "exeggcute",
        url: "https://pokeapi.co/api/v2/pokemon/102/"
    },
    {
        name: "exeggutor",
        url: "https://pokeapi.co/api/v2/pokemon/103/"
    },
    {
        name: "cubone",
        url: "https://pokeapi.co/api/v2/pokemon/104/"
    },
    {
        name: "marowak",
        url: "https://pokeapi.co/api/v2/pokemon/105/"
    },
    {
        name: "hitmonlee",
        url: "https://pokeapi.co/api/v2/pokemon/106/"
    },
    {
        name: "hitmonchan",
        url: "https://pokeapi.co/api/v2/pokemon/107/"
    },
    {
        name: "lickitung",
        url: "https://pokeapi.co/api/v2/pokemon/108/"
    },
    {
        name: "koffing",
        url: "https://pokeapi.co/api/v2/pokemon/109/"
    },
    {
        name: "weezing",
        url: "https://pokeapi.co/api/v2/pokemon/110/"
    },
    {
        name: "rhyhorn",
        url: "https://pokeapi.co/api/v2/pokemon/111/"
    },
    {
        name: "rhydon",
        url: "https://pokeapi.co/api/v2/pokemon/112/"
    },
    {
        name: "chansey",
        url: "https://pokeapi.co/api/v2/pokemon/113/"
    },
    {
        name: "tangela",
        url: "https://pokeapi.co/api/v2/pokemon/114/"
    },
    {
        name: "kangaskhan",
        url: "https://pokeapi.co/api/v2/pokemon/115/"
    },
    {
        name: "horsea",
        url: "https://pokeapi.co/api/v2/pokemon/116/"
    },
    {
        name: "seadra",
        url: "https://pokeapi.co/api/v2/pokemon/117/"
    },
    {
        name: "goldeen",
        url: "https://pokeapi.co/api/v2/pokemon/118/"
    },
    {
        name: "seaking",
        url: "https://pokeapi.co/api/v2/pokemon/119/"
    },
    {
        name: "staryu",
        url: "https://pokeapi.co/api/v2/pokemon/120/"
    },
    {
        name: "starmie",
        url: "https://pokeapi.co/api/v2/pokemon/121/"
    },
    {
        name: "mr-mime",
        url: "https://pokeapi.co/api/v2/pokemon/122/"
    },
    {
        name: "scyther",
        url: "https://pokeapi.co/api/v2/pokemon/123/"
    },
    {
        name: "jynx",
        url: "https://pokeapi.co/api/v2/pokemon/124/"
    },
    {
        name: "electabuzz",
        url: "https://pokeapi.co/api/v2/pokemon/125/"
    },
    {
        name: "magmar",
        url: "https://pokeapi.co/api/v2/pokemon/126/"
    },
    {
        name: "pinsir",
        url: "https://pokeapi.co/api/v2/pokemon/127/"
    },
    {
        name: "tauros",
        url: "https://pokeapi.co/api/v2/pokemon/128/"
    },
    {
        name: "magikarp",
        url: "https://pokeapi.co/api/v2/pokemon/129/"
    },
    {
        name: "gyarados",
        url: "https://pokeapi.co/api/v2/pokemon/130/"
    },
    {
        name: "lapras",
        url: "https://pokeapi.co/api/v2/pokemon/131/"
    },
    {
        name: "ditto",
        url: "https://pokeapi.co/api/v2/pokemon/132/"
    },
    {
        name: "eevee",
        url: "https://pokeapi.co/api/v2/pokemon/133/"
    },
    {
        name: "vaporeon",
        url: "https://pokeapi.co/api/v2/pokemon/134/"
    },
    {
        name: "jolteon",
        url: "https://pokeapi.co/api/v2/pokemon/135/"
    },
    {
        name: "flareon",
        url: "https://pokeapi.co/api/v2/pokemon/136/"
    },
    {
        name: "porygon",
        url: "https://pokeapi.co/api/v2/pokemon/137/"
    },
    {
        name: "omanyte",
        url: "https://pokeapi.co/api/v2/pokemon/138/"
    },
    {
        name: "omastar",
        url: "https://pokeapi.co/api/v2/pokemon/139/"
    },
    {
        name: "kabuto",
        url: "https://pokeapi.co/api/v2/pokemon/140/"
    },
    {
        name: "kabutops",
        url: "https://pokeapi.co/api/v2/pokemon/141/"
    },
    {
        name: "aerodactyl",
        url: "https://pokeapi.co/api/v2/pokemon/142/"
    },
    {
        name: "snorlax",
        url: "https://pokeapi.co/api/v2/pokemon/143/"
    },
    {
        name: "articuno",
        url: "https://pokeapi.co/api/v2/pokemon/144/"
    },
    {
        name: "zapdos",
        url: "https://pokeapi.co/api/v2/pokemon/145/"
    },
    {
        name: "moltres",
        url: "https://pokeapi.co/api/v2/pokemon/146/"
    },
    {
        name: "dratini",
        url: "https://pokeapi.co/api/v2/pokemon/147/"
    },
    {
        name: "dragonair",
        url: "https://pokeapi.co/api/v2/pokemon/148/"
    },
    {
        name: "dragonite",
        url: "https://pokeapi.co/api/v2/pokemon/149/"
    },
    {
        name: "mewtwo",
        url: "https://pokeapi.co/api/v2/pokemon/150/"
    },
    {
        name: "mew",
        url: "https://pokeapi.co/api/v2/pokemon/151/"
    }
]

const pokeresult = pokemones.map((pokemon, key) => {
    let pok = {
        name: pokemon.name,
        url : pokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${key+1}.png`
    }

    return pok
})
console.log(pokeresult[0]);
// Crear Variable

let pokeFront = ''

// rellenar variable
pokeresult.forEach(
    function (poke) {
        pokeFront += `<div class="card-pokemon">
                        <h4>${poke.name}</h4>
                        <figure><img src="${poke.url}" alt="${poke.name}"> </figure>
                        
                    </div>`
    }
)


// llamamos al contenedor
let contenedor = document.querySelector('.contenedorPokes')


//Introducimos la variable en el contenedor

contenedor.innerHTML = pokeFront