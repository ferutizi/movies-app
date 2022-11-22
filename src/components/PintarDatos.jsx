import './PintarDatos.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from '../pages/Movie';
import Home from '../pages/Home';

const PintarDatos = ({ movies, setMovies, search, movie }) => {
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

    console.log(movies)

    return(
        <>
            <Routes>
                <Route path='/' element={<Home movies={movies}/>} />
                <Route path='/:movie_name' element={<Movie movies={movies} movie={movie} />} />
            </Routes>
        </>
    );
}

export default PintarDatos;