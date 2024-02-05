import React from 'react'
import { useStateValue } from './StateProvider';
import '../CSS/CheckoutProduct.css';
import GradeIcon from "@mui/icons-material/Grade";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct_image"
                src={image}
                alt="Amazon Product"
            />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>
                                <GradeIcon className="checkoutProduct_rating_icon" />
                            </p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    );
};

export default CheckoutProduct;