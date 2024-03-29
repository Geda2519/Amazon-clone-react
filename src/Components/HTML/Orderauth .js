import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import '../CSS/Orderauth.css';
function Orderauth({ order }) {
    console.log(order)
    return (
        <div className="order my-4 postion-relative bg-white">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id postion-absolute">
                <small>{order.id}</small>

            </p>
            {order.data.basket?.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    quantity={item.quantity}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Orderauth 