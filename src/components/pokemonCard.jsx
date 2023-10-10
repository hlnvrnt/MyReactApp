function PokemonCard (){
    const pokemon = pokemonList[0];
    if (Object.hasOwn(pokemon, "imgSrc")){
        return  <figure>
        <img src = {pokemon.imgSrc} />
        <figcaption>Bulbasaur</figcaption>
        </figure>
        
    }else {
       return <figure>
       <p>????</p>
       <figcaption>{pokemon.name}</figcaption>
       </figure>
    }
}

// for (let i=0; i<pokemonList.length; i++){
    // if (pokemonList[i].imgSrc !== ""){


export default PokemonCard

const pokemonList = [
    {
        name : "bulbasaur",
        imgSrc : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name : "mew",
    },
];