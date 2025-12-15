import React, { useContext} from "react";
import "../assets/styles/fooditem.css"
import { StoreContext } from "../context/StoreContext";

function FoodItem({id,name, price, description, image}){
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

    return(
        <div className="food-item-container">
            <div className="food-item-image-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !cartItems[id]? <img className="add" src="/images/plus-solid-full.svg" onClick={()=>addToCart(id)}/>: <div className="food-item-counter">
                        <img onClick={()=>removeFromCart(id)} src="/images/minus-solid-full.svg" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src="/images/plus-solid-green.svg" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src="/images/rating.png" alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">KES {price}</p>
                
            </div>
        </div>
    )
}

export default FoodItem;