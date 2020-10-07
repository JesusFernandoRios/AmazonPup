import React from 'react'
import { useStateValue } from '../utils/StateProvider'
import "./styling/checkout.css"
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    // calling useStateValue since ill need to see the basket and dispatch to modify the basket
    const [{basket}, dispatch] = useStateValue();
    

    return (
        <div className="checkout">
            <img 
            className="checkout__pic" 
            src="https://www.hotelcurrent.com/wp-content/uploads/2013/08/dog-banner.jpg"
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
                    {basket.map(item => (
                      <CheckoutProduct
                      item={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />
                    ))}
                    
                </div>
            )}
            
        </div>
    )
}

export default Checkout
