import React from 'react'
import { useStateValue } from '../utils/StateProvider'
import "./styling/checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    // calling useStateValue since ill need to see the basket and dispatch to modify the basket
    const [{basket}, dispatch] = useStateValue();
    

    return (
        <div className="checkout">

            <div className="checkout__left">
                <img 
                className="checkout__pic" 
                src="https://primopup.com/wp-content/uploads/2015/10/dog-banner.png"
                alt="line of doggos"
                />
                {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty</h2>
                    <p>There are no doggos in your basket. Click "add to basket" next to the dog of your choice!</p>
                </div>
                ): (
                <div>
                    <h2 className="checkout__title">Your Basket</h2>
                    <hr/>
                    {/* list of all checkout products */}
                    {basket?.map(item => (
                      <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />
                    ))}
                    
                </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
