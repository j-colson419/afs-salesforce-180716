var pokemon = [];
var limit;
var offset;
var search_button;

document.addEventListener('DOMContentLoaded', function(){
    limit = document.getElementById("limit");
    offset = document.getElementById("offset");
    search_button = document.getElementById("search-pokemon");
    search_button.onclick = addAllPokemon;
    addAllPokemon();
});

function addAllPokemon() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/?limit=${limit.value}&offset=${offset.value-1}`);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            onSuccessAddAllPokemons(JSON.parse(xhr.response).results);
        }
    };
    xhr.send();
}

function onSuccessAddAllPokemons(pokemons) {
    var pokemon_grid = document.getElementById('pokemon-grid')
    while (pokemon_grid.firstChild) {
        pokemon_grid.removeChild(pokemon_grid.firstChild);
    }
    pokemons.forEach((pokemon, p) => {
        var card = document.createElement('div');
        card.setAttribute("class", "card");

        var card_content = document.createElement('div');
        card_content.setAttribute("class", "card-content");

        var img = document.createElement('img');
        img.setAttribute("src", 'https://rebekahlang.files.wordpress.com/2015/08/pokemon-egg-gif.gif');
        img.setAttribute("alt", pokemon.name);

        var image = new Image();
        image.onload = () => {
            img.setAttribute("src", image.src);
            console.log(`Loaded ${pokemon.name}, ${image.src}.`);
        }
        image.onerrer = () => {
            console.log(`Error ${pokemon.name}, ${image.src}.`);
        }
        image.src = `https://pokeapi.co/media/img/${pokemon.url.split("\/")[6]}.png`;

        var container = document.createElement('div');
        container.setAttribute("class", "container");

        var title = document.createElement('h4');
        title.innerText = pokemon.url.split("\/")[6] + " - " + titleCase(pokemon.name);
        
        container.appendChild(title);
        card_content.appendChild(img);
        card_content.appendChild(container);
        card.appendChild(card_content);

        pokemon_grid.appendChild(card);
    });
    window.setTimeout(resizeAllGridCards, 100);
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}