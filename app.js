const baseurl = "https://pokeapi.co/api/v2/pokemon/"
const poke_container = document.getElementById("poke_container");
const pokemon_number = 150;

const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric:"#fcf7de",
    water: "#def4fd",
    ground:"#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    figthing: "#e6e0d4" ,
    normal: "#f5f5f5",

}

const main_types = Object.keys(colors); // obje içinde array haline getirdim.

// console.log(main_types);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }

}

const getPokemon = async (id) => {

    const url = `${baseurl}${id}`

    const response = await fetch(url);

    const pokemon = await response.json();

    // console.log(pokemon);

    createPokemonCard(pokemon);

}

function createPokemonCard(pokemon) {

    const pokeElement = document.createElement("div");

    pokeElement.classList.add("pokemon");

    const poke_types = pokemon.types.map(el => el.type.name);
     // map ile obje içerisinde gezinip , name'lere ulaştım. 

    const type = main_types.find(
        type => poke_types.indexOf(type) > -1 
    );

    const typeOf = type[0].toUpperCase() + type.slice(1) ;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1) ;

    const color = colors[type];

    pokeElement.style.backgroundColor = color ;

    pokeElement.innerHTML = `
        <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" >
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3,"0")}</span>
            <h3 class="name">${name}</h3>
            <small class="type"> Type: <span>${typeOf}</span></small>
        </div>
    `

    poke_container.appendChild(pokeElement);

    // console.log(type);

}


getPokemon();

fetchPokemons();


