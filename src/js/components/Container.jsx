import React, { Component } from "react";
import ListPokemons from "./ListPokemons";
import Search from "./Seach";

 
class Container extends Component {
  
  render() {
    return (
      <div>
        <Search />
        <ListPokemons />
      </div>
    )
  }

}

export default Container