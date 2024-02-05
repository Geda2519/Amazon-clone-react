import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Products.css';
import { useStateValue } from './StateProvider';
function Prodacts({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log('this is the basket', basket);
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_,) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}


export default Prodacts;