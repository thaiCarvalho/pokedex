import lupa from '../../icons/lupa.svg'
import React from "react";

const Search = ({ placeholder, onChange }) => {

  return (
    <form className="App-search">
      <img className="App-search--icon" src={lupa}></img>
      <input 
        className="App-search--input"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>

  )
}

export default Search