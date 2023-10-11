
function NavBar ({pokemonList, pokemonIndex, handleClickDecremente, handleClickIncremente}){
    
 if ((pokemonIndex > 0) && (pokemonIndex < pokemonList.length -1)) {
    return <div>
      <button onClick = {handleClickDecremente}>Précédent</button>
      <button onClick = {handleClickIncremente}>Suivant</button>
    </div>
  } else if (pokemonIndex <= 0) {
    return <div>
    <button onClick = {handleClickIncremente}>Suivant</button>
    </div>
  } else if (pokemonIndex >= pokemonList.length -1){
    return <div>
    <button onClick ={handleClickDecremente}>Précédent</button>
    </div>
  }
   }

  export default NavBar