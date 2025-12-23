import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../assets/styles/placeorder.css"

function PlaceOrder() {
    const { getTotalCartAmount, deliverFee } = useContext(StoreContext);

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>

                <input type="email" placeholder="Email Address" />
                <input type="Street" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right"></div>
            <div className="cart-total">
                <h2>Total Summary</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal: </p>
                        <p>KES {getTotalCartAmount().toLocaleString()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>KES {(getTotalCartAmount() === 0 ? 0 : deliverFee).toLocaleString()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>KES {(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliverFee).toLocaleString()}</b>
                    </div>

                </div>
                <button >Proceed To Payment</button>
            </div>
        </form>
    )
}

export default PlaceOrder;