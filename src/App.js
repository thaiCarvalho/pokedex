import filter from './icons/Filter.svg'
import sort from './icons/Sort.svg'
import generation from './icons/Generation.svg'
import './App.scss';
import Container from './js/components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header--filters">
          <img src={generation} className="App-logo" alt="logo" />
          <img src={filter} className="App-logo" alt="logo" />
          <img src={sort} className="App-logo" alt="logo" />
        </div>
        <h2>Pokédex</h2>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
      </header>
      <Container/>
    </div>
  );
}

export default App;
