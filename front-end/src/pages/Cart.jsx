import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { StoreContext } from "../context/StoreContext";
import "../assets/styles/cart.css"

function Cart() {
    const { cartItems, food_data, removeFromCart, getTotalCartAmount, deliverFee } = useContext(StoreContext);
    const navigate = useNavigate();
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
                                <p>KES {(getTotalCartAmount()===0? 0:deliverFee).toLocaleString()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>KES {(getTotalCartAmount()===0? 0: getTotalCartAmount()+ deliverFee).toLocaleString()}</b>
                            </div>
                            
                        </div>
                        <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
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
            </div>
        </div>
    )

}

export default Cart;