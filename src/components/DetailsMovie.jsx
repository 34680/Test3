import {useState, useEffect, React} from 'react';
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const DetailsMovies = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    const URL = `https://at.usermd.net/api/movies/${id}`;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(URL).then((response) => {
            const movie = response.data;
            setMovie(movie);
        });
    }, []);

    return (
        <>
            <Header/>
            <div className='content' style={{width: '100%', height: '100%'}}>
                <div className='movie-card' style={{color: 'black', fontWeight: 'bold'}}>
                    <div className="movie-card__img">
                        <img className="movie-img" src={movie.image} alt={movie.title}/>
                    </div>
                    <div className='movie-card__text'>
                        <h2>{movie.title}</h2>
                        <p>{movie.content}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default DetailsMovies;