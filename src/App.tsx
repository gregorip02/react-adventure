import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PokemonList } from "./stages/pokeapi/PokemonList";

export function App() {
  return <>
    <p>🎉 Select a stage to see more details.</p>
    <hr />
    <Link style={{display: 'block'}} to="/">Home</Link>
    <Link style={{display: 'block'}} to="/pokemon">Pokeapi</Link>
  </>
}

export function Root() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon" element={<PokemonList />} />
    </Routes>
  </BrowserRouter>
}
