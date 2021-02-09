import React, { useEffect, useState } from "react";
import ListPokemons from "./ListPokemons";
import Search from "./Seach";

const Container = () => {

  const [searchField, setSearchField] = useState('')
  const [listPokemons, setPokemons]= useState([])
  // const [error, setError]= useState(false)

  useEffect(() => {
    async function fetchData() {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=60`;
      const response = await fetch(url).then((response) => response.json());

      response.results.map(res => {
        allData(res)
      })
    }
    fetchData()
  }, [])

  function allData(res) {

    const url = res.url
    fetch(url)
      .then(response => response.json())
      .then(all => {
        setPokemons(all)
      })
  }
  
  return (
    <div>
      <Search 
        placeholder="What Pokémon are you looking for?"
        value={searchField}
        onChange={event => setSearchField(event.target.value)}
      />

      <ListPokemons pokemon={listPokemons}/>
    </div>
  )
}

export default Container