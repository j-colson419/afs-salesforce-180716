
document.addEventListener('DOMContentLoaded', function(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/1');
    xhr.onreadystatechange = function(){
        alert(xhr.readyState);
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response);
            var pokemon = JSON.parse(xhr.response);
            console.log(pokemon);
            document.getElementById('name').innerText = pokemon.name;
        };
    };
    xhr.send();

});