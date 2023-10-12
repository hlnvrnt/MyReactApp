
function NavBar ({pokemonList, setIndexChoice}){
 
    function handlePokemon (index) {
      setIndexChoice(index)
    }
return <div>
  {pokemonList.map((pokemon, index) => (
    <section>
    <div>
      <button onClick = {()=>{handlePokemon(index)}} key = {pokemon.id}>{pokemon.name}</button>
    </div>
    </section>
  ))}
</div> 
   }

  export default NavBar












  
  {/* <button onClick = {handleClickDecremente}>{pokemon.name}</button> */}
//  if ((pokemonIndex > 0) && (pokemonIndex < pokemonList.length -1)) {
  //     return <div>
//       <button onClick = {handleClickDecremente}>Précédent</button>
//       <button onClick = {handleClickIncremente}>Suivant</button>
//     </div>
//   } else if (pokemonIndex <= 0) {
//     return <div>
//     <button onClick = {handleClickIncremente}>Suivant</button>
//     </div>
//   } else if (pokemonIndex >= pokemonList.length -1){
//     return <div>
//     <button onClick ={handleClickDecremente}>Précédent</button>
//     </div>
//   }