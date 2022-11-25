import { useParams } from "react-router-dom";


const Movie = ({ movies }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_url = 'w500';

    const { movie_name } = useParams();
    const selectedMovie = movies.results.filter(movie => movie.title == movie_name);
    const details = selectedMovie[0];

    console.log(details)

    return(
        <div className="movies__details">
            <div className="details__container">
                <img className="details__img" src={`${base_url}/${size_url}/${details.backdrop_path}`} alt={details.title} />
            </div>
            <div className="details__container">
                <h2 className="details__title">{details.title}</h2>
                <p className="details__overview">{details.overview} ...</p>
            </div>
        </div>
    );
}

export default Movie;