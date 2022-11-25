import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ movie, movies }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_url = 'w300';

    return(
        <>
            {movies.results ?
                    <div className='card__container'>
                        <Link to={`/${movie.title}`} style={{textDecoration: 'none', maxHeight: '450px'}}>
                            <img src={`${base_url}/${size_url}/${movie.poster_path}`} alt={movie.title}></img>
                            <div className='card__description'>
                                <h2 className='description__title'>{movie.title.substr(0, 32, '...')}</h2>
                                <p className='description__text'>{movie.overview.substr(0, 100)} ...</p>
                                <div className='card__arrow'>❯</div>
                            </div>
                        </Link>
                    </div>
            : null}
        </>
    );
}

export default Card;