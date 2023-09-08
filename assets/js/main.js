
//lista de tipos de pokemon
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
    }


function convertPokemonToLi(pokemon){
return`
<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}

                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                
            </li>
`
}

const pokemonList = document.getElementById(`pokemonList`)
pokeApi.getPokemons().then((pokemons = []) =>{
    //map é uma função de lista para converter
    //join concatena na lista, '' deixa sem separador a string que foi gerada no html
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
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
