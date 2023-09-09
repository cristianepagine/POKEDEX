const pokemonList = document.getElementById(`pokemonList`)
const loadMoreButton = document.getElementById(`loadMoreButton`)
const limit = 12
let offset = 0

//lista de tipos de pokemon


function loadPokemonItens(offset, limit) {
    // eslint-disable-next-line no-undef
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
            </li>
        `).join('')
            pokemonList.innerHTML += newHtml;
    })
  }
  
  loadPokemonItens(offset, limit);
  
  loadMoreButton.addEventListener("click", () => {
    offset += limit
  
    const qtdRecordNextPage = offset + limit
    loadPokemonItens(offset,limit)
  
    
  });

    

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
