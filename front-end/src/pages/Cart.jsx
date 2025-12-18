import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../assets/styles/cart.css"

function Cart() {
    const { cartItems, food_data, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className="cart-items-container">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_data.map((item, index) => {
                    if (cartItems[item.id] > 0)
                        return (
                            <>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} />
                                    <p>{item.name}</p>
                                    <p>KES {item.price.toLocaleString()}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>{(item.price * cartItems[item.id]).toLocaleString()}</p>
                                    <p onClick={()=>removeFromCart(item.id)} className="cross">X</p>
                                </div>
                                <hr />
                            </>
                        )
                })}
                <div className="cart-bottom">
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
                                <p>KES {(2).toLocaleString()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>{(getTotalCartAmount()+2).toLocaleString()}</b>
                            </div>
                            
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>Have a promocode? Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder="PROMOCODE" />
                                <button>Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div>
    )

}

export default Cart;