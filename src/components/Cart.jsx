import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Cart.css';

const Cart = (props) => {
    const URL = `/details`
    const myData = {
        id: props.id
    }
    const MIN = 0.0;
    const MAX = 5.0;
    const DECIMALS = 2;

    const getRandomFloat = (min, max, decimals) => {
        const number = (Math.random() * (max - min) + min).toFixed(decimals);

        return parseFloat(number);
    }
    return (
        <div className='movie-card'>
            <div className="movie-card__img">
                <img className="movie-img" src={props.image} alt={props.title}/>
            </div>
            <div className='movie-card__text'>
                <h2>{props.title}</h2>
                <p>
					<span>
						<i className='fa-regular fa-star rate-symbol'> {getRandomFloat(MIN, MAX, DECIMALS)} / 5.00</i>
					</span>
                </p>
                <Link to={URL} state={myData}>Details</Link>
            </div>
        </div>
    );
};

export default Cart;