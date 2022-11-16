const Card = ({ movie, movies }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_url = 'w300';

    return(
        <>
            {movies.results ?
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p>{movie.original_title}</p>
                    <p>{movie.popularity}</p>
                    <img src={`${base_url}/${size_url}/${movie.poster_path}`} alt={movie.title}></img>
                </div>
            : null}
        </>
    );
}

export default Card;