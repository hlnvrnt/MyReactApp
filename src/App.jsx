import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard.jsx'


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const handleClickIncremente = () => {
    setPokemonIndex (pokemonIndex + 1)
  }
  const handleClickDecremente = () => {
    setPokemonIndex (pokemonIndex - 1)
  }

  if ((pokemonIndex > 0) && (pokemonIndex < pokemonList.length -1)) {
    return <div>
      <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
      <button onClick = {handleClickDecremente}>Précédent</button>
      <button onClick = {handleClickIncremente}>Suivant</button>
    </div>
  } else if (pokemonIndex <= 0) {
    return <div>
    <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
    <button onClick = {handleClickIncremente}>Suivant</button>
    </div>
  } else if (pokemonIndex >= pokemonList.length -1){
    return <div>
    <div><PokemonCard pokemon ={pokemonList[pokemonIndex]} /></div>
    <button onClick = {handleClickDecremente}>Précédent</button>
    </div>
  }}
  
  

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

// const [count, setCount] = useState(0)
/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */