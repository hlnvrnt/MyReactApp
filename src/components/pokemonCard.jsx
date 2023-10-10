import PropTypes from "prop-types";

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.object, 
    }),
}


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

export default PokemonCard




