import './Card.scss'

const Card = ({ movie, movies }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_url = 'w300';

    return(
        <>
            {movies.results ?
                <div className='card__container'>
                    <img src={`${base_url}/${size_url}/${movie.poster_path}`} alt={movie.title}></img>
                    <p className='card__arrow'>❯</p>
                    <div className='card__description'>
                        <h2 className='description__title'>{movie.title.substr(0, 32, '...')}</h2>
                        <p className='description__text'>{movie.overview.substr(0, 100)} ...</p>
                    </div>
                </div>
            : null}
        </>
    );
}

export default Card;