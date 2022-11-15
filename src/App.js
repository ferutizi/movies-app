import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const ApiKey = '436298427a108d3cea382bfb7e2d4fa0';
  
  const consumirApi = useEffect(() => {
    fetchAPI();
  }, [])

  const [movies, setMovies] = useState({});
  

  const fetchAPI = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}`);
    const data = await res.json();
    setMovies(data);
  }

  console.log(movies.results)

  return (
    <>
      {movies.results ? 
        <div className="App">
          <h1>Movies</h1>
            {movies.results.map(item => <p>{item.original_title}</p>)}
        </div>
      : <p>no</p>}
    </>
  );
}

export default App;
