import './App.css';
import { useEffect } from 'react';


function App() {
  const ApiKey = '436298427a108d3cea382bfb7e2d4fa0';
  
  const consumirApi = useEffect(() => {
    fetchAPI();
  }, [])
  

  const fetchAPI = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Movies</h1>
    </div>
  );
}

export default App;
