import './PintarDatos.scss';
import { useEffect } from 'react';
import Card from './Card';

const PintarDatos = ({ movies, setMovies, search }) => {
    const apiKey = '436298427a108d3cea382bfb7e2d4fa0';
  
    const consumirApi = useEffect(() => {
        fetchAPI();
    }, []);

    const searchMovie = useEffect(() => {
        searchAPI();
    }, [search]);

    const fetchAPI = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
            const data = await res.json();
            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    }

    const searchAPI = async () => {
        if(search) {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=1`);
                const data = await res.json();
                setMovies(data);        
            } catch (error) {
                console.log(error);
            }
        };
    }

    return(
        <>
            {movies.results 
                ? 
                    <div className='movies__container'>
                        {movies.results.map(item =>
                            <Card movie={item} movies={movies} key={item.id}/>)
                        }
                    </div>
                : <p>Loading...</p>
            }
        </>
    );
}

export default PintarDatos;