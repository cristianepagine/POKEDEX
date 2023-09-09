
/*objeto com as funcoes de manipulacao da pokeapi*/
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon;
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types

    pokemon.types =  types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon

}


//fazendo a requisição dos detalhes do pokemon
pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

/*fetch - função assincrona de busca dos pokemons */
pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
/*arrow function com uma unica linha de retorno, Ao adicionar return antes do fetch, você garante que a função getPokemons retorne a Promise gerada pela chamada fetch*/
    .then ((response)=> response.json())
    //aqui pegamos o json acima e pegamos só o body que é a lista de pokemons
    .then ((jsonBody) => jsonBody.results)
    
    // usa o .map pra fazer a lista de promisses gerando o response e ja converte pra json
    //pegamos a lista e fazemos ela virar uma lista de requisicoes do detalhe do pokemon usando a funcion getpokemondetail
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    //entao esperamos que todas as requisicoes terminem
    .then((detailRequests) => Promise.all(detailRequests))
    //e quando todas terminarem apresenta uma lista de detalhes dos pokemons
    .then((pokemonsDetails)=> pokemonsDetails)
        
    
/*retorna erro no console caso a requisição não seja de sucesso*/    
    .catch ((error) => console.log(error))
}