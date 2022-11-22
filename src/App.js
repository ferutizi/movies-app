import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PintarDatos from './components/PintarDatos';
import Nav from './components/Nav';

function App() {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState();
  return (
    <>
      <div className='App'>
        <Nav setSearch={setSearch}/>
        <PintarDatos movies={movies} setMovies={setMovies} search={search}/>
      </div>    
    </>
  );
}

export default App;
