import logo from "./logo.svg";
import "./App.css";
import { PokemonClient } from "pokenode-ts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const api = new PokemonClient();

      const data = await api.getPokemonByName("luxray");
      console.log(data.name);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
