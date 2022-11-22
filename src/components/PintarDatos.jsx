import './PintarDatos.scss';
import { useEffect } from 'react';
import Card from './Card';
import { Link, Route, Routes, useParams } from 'react-router-dom';

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

    const Movie = () => {
        const { movie_name } = useParams();
        return(
            <>
            <h2>hola</h2>
            <p>{movie_name}</p>
            </>
        )
    }

    const Home = () => {
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
        )
    }

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/:movie_name' element={<Movie />} />
            </Routes>
            
        </>
    );
}

export default PintarDatos;