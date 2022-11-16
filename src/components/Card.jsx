import './Card.css'

const Card = ({ movie, movies }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_url = 'w300';

    return(
        <>
            {movies.results ?
                <div className='card__container'>
                    <img src={`${base_url}/${size_url}/${movie.poster_path}`} alt={movie.title}></img>
                </div>
            : null}
        </>
    );
}

export default Card;