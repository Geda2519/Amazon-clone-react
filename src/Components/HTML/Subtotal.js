import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../CSS/Subtotal.css';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='bg-warning w-100 mt-2 text-dark fs-5' onClick={(e) => navigate('/payment')}>Procsed to chechout</button>
            <marquee className="fs-4 border border-3">Always be certain when you use our service</marquee>

        </div>
    )
}

export default Subtotal;