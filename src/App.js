import { useState } from 'react';
import PintarDatos from './components/PintarDatos';
import Formulario from './components/Formulario';

function App() {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState();
  return (
    <>
      <div className='App'>
        <h1>Movies</h1>
        <Formulario setSearch={setSearch}/>
        <PintarDatos movies={movies} setMovies={setMovies} search={search}/>
      </div>    
    </>
  );
}

export default App;
