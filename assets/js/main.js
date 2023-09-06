

function convertPokemonToLi(pokemon){
return`
<li class="pokemon">
                <spam class="number">#001</spam>
                <spam class="name">${pokemon.name}</spam>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
                </div>
                
            </li>
`
}

const pokemonList = document.getElementById(`pokemonList`)
pokeapi.getPokemons().then((pokemons = []) =>{
    //map é uma função de lista para converter
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
    

/*pokeapi.getPokemons().then ((pokemons) => {
    inicia variavel para criar a lista para poder renderizar o html de uma unica vez
    const listItens = []

        /*faz uma busca enquanto o total da lista não for atingida e inclui no array    
        for (let i=0; i<pokemons.length; i++ ){
        const pokemon = pokemons[i];
         metodo push inclui o item no final do array
        listItens.push(convertPokemonToLi(pokemon))    
       
}
console.log(listItens)
})*/
