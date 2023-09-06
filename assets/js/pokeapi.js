/*objeto com as funcoes de manipulacao da pokeapi*/

const pokeapi = {}

/*fetch - função assincrona de busca dos pokemons */
pokeapi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
/*arrow function com uma unica linha de retorno, Ao adicionar return antes do fetch, você garante que a função getPokemons retorne a Promise gerada pela chamada fetch*/
    .then ((response)=> response.json())
    .then ((jsonBody) => jsonBody.results)
/*retorna erro no console caso a requisição não seja de sucesso*/    
    .catch ((error) => console.log(error))
}