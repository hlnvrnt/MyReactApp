import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
  // const [pokemonIndex, setPokemonIndex] = useState(0)
  const [indexChoice, setIndexChoice]=useState(0)
  return  <div>
    <PokemonCard pokemon ={pokemonList[indexChoice]}/>
    <NavBar setIndexChoice={setIndexChoice} pokemonList ={pokemonList}/>
    </div>
}
  
export default App

const pokemonList = [
  {
    id:0,  
    name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id:1,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id:2,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id:3,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id:4,
      name: "mew",
    },
  ];


  // const handleClickDecremente = () => {
  //   setPokemonIndex (pokemonIndex - 1)
  // }
// handleClickDecremente={handleClickDecremente} 
// const handlePokemon = () => {
  //   setPokemonIndex (pokemonList[pokemonIndex])
  // }