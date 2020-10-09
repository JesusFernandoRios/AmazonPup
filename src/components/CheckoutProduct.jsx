import React from 'react'
import "./styling/checkoutProduct.css";
import {useStateValue} from '../utils/StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket}, dispatch] = useStateValue()

    // console.log(id,title,image,price,rating)

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/* create an array of rating fill it with empty value */}
                    {Array(rating).fill().map((_) =>
                    <p>🐶</p>)}
                </div>

                <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button>

            </div>

        </div>
    )
}

export default CheckoutProduct;
