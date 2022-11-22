import { useParams } from "react-router-dom";


const Movie = ({ movies }) => {
    const { movie_name } = useParams();
    return(
        <>
            {movies.results 
                ? 
                    <>
                        <p>{movie_name}</p>
                        <p>{movies.results[0].id}</p>
                    </>
                : 'err'
            }
        </>
    );
}

export default Movie;