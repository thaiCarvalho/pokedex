import React from "react";

const ListPokemons = ({pokemon}) => {
  console.log(pokemon, 'list');
  console.log(pokemon.name, 'name');
  return (
    <div>
      {pokemon.name}
    </div>
  )
}

export default ListPokemons