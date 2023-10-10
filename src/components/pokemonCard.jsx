function PokemonCard (props){
    console.log(props)
    const pokemon = props.pokemon;
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

