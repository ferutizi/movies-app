import { useEffect, useState } from 'react';
import Card from './Card';

const PintarDatos = () => {
    const ApiKey = '436298427a108d3cea382bfb7e2d4fa0';
  
    const consumirApi = useEffect(() => {
        fetchAPI();
    }, [])

    const [movies, setMovies] = useState({});
  

    const fetchAPI = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`);
        const data = await res.json();
        setMovies(data);
    }

    return(
        <>
            {movies.results 
                ? 
                    <div className='movies__container'>
                        {movies.results.map(item =>
                            <Card movie={item} movies={movies} />)
                        }
                    </div>
                : <p>Loading...</p>
            }
        </>
    );
}

export default PintarDatos;