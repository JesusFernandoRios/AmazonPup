import React from 'react';
import { useStateValue } from '../utils/StateProvider';
import './styling/product.css';


function Product({id,title,image,price,rating}) {

    // even if only using dispatch, you must include {basket}
    const [{},dispatch] = useStateValue();

    const addToBasket = () =>  {
        // add item to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="div product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* create an array of rating fill it with empty value */}
                    {Array(rating).fill().map((_) =>
                    <p>🐶</p>)}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    )
}

export default Product
