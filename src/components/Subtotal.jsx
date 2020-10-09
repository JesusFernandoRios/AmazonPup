import React from 'react'
import "./styling/subtotal.css"
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../utils/StateProvider'
import { getBasketTotal } from '../utils/reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div>
            <div className="subtotal">
                {/* price */}
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/> This order contains a gift
                            </small>
                        </>
                    )}


                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
