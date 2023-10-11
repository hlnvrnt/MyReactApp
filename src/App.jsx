import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const handleClickIncremente = () => {
    setPokemonIndex (pokemonIndex + 1)
  }
  const handleClickDecremente = () => {
    setPokemonIndex (pokemonIndex - 1)
  }

  return  <div>
    <PokemonCard pokemon ={pokemonList[pokemonIndex]} />
    <NavBar pokemonList ={pokemonList} pokemonIndex={pokemonIndex} handleClickDecremente={handleClickDecremente} handleClickIncremente= {handleClickIncremente}/>
    </div>

  // if ((pokemonIndex > 0) && (pokemonIndex < pokemonList.length -1)) {
  //   return <div>
  //     <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
  //     <button onClick = {handleClickDecremente}>Précédent</button>
  //     <button onClick = {handleClickIncremente}>Suivant</button>
  //   </div>
  // } else if (pokemonIndex <= 0) {
  //   return <div>
  //   <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
  //   <button onClick = {handleClickIncremente}>Suivant</button>
  //   </div>
  // } else if (pokemonIndex >= pokemonList.length -1){
  //   return <div>
  //   <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
  //   <button onClick = {handleClickDecremente}>Précédent</button>
  //   </div>
  // }
}
  
  

export default App

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

