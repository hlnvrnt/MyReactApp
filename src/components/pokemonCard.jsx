import PropTypes from "prop-types";

PokemonCard.propTypes = {
  pokemon:PropTypes.shape({
    name:PropTypes.string.isRequired,
    imgSrc:PropTypes.string,
  }).isRequired,
}
function PokemonCard(props) {
  const pokemonindex = props.pokemon;
  console.log(pokemonindex);
  if(pokemonindex.imgSrc !== null) {
      return <figure>
            <img src={pokemonindex.imgSrc}></img>
            <figcaption>{pokemonindex.name}</figcaption>
            </figure>
  }
  else {
    return <figure>
    <img src=""></img>
    <p>???</p>
    <figcaption>{pokemonindex.name}</figcaption>
    </figure>
  }
}
export default PokemonCard;




// import PropTypes from "prop-types";

// PokemonCard.propTypes = {
//     pokemon : PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         imgSrc: PropTypes.object, 
//     }),
// }
// function PokemonCard(pokemon) {
//     // const pokemonindex = props.pokemon;
//     // console.log(pokemonindex);
//     if(pokemon.imgSrc !== null) {
//         return <figure>
//               <img src={pokemon.imgSrc}></img>
//               <figcaption>{pokemon.name}</figcaption>
//               </figure>
//     }
//     else {
//       return <figure>
//       <img src=""></img>
//       <p>???</p>
//       <figcaption>{pokemon.name}</figcaption>
//       </figure>
//     }
//   }


// function PokemonCard (props){
//     console.log(props)
//     const pokemon = props.pokemon;
//     if (Object.hasOwn(pokemon, "imgSrc")){
//         return  <figure>
//         <img src = {pokemon.imgSrc} />
//         <figcaption>Bulbasaur</figcaption>
//         </figure>
        
//     }else {
//        return <figure>
//        <p>????</p>
//        <figcaption>{pokemon.name}</figcaption>
//        </figure>
//     }
// }





