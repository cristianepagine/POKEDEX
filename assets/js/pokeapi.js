/*objeto com as funcoes de manipulacao da pokeapi*/

const paokepi = {}

//fazendo a requisição dos detalhes do pokemon
pokeapi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
}

/*fetch - função assincrona de busca dos pokemons */
pokeapi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
/*arrow function com uma unica linha de retorno, Ao adicionar return antes do fetch, você garante que a função getPokemons retorne a Promise gerada pela chamada fetch*/
    .then ((response)=> response.json())
    .then ((jsonBody) => jsonBody.results)
    
    // usa o .map pra fazer a lista de promisses gerando o response e ja converte pra json
    .then((pokemons) => pokemons.map((pokemon).getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails)=> {
        console.log(pokemonsDetails)})
        
    
/*retorna erro no console caso a requisição não seja de sucesso*/    
    .catch ((error) => console.log(error))
}