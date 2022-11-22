import Card from '../components/Card';

const Home = ({ movies }) => {
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

export default Home;