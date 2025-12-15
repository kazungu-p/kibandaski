import React, { useContext } from "react";
import "../assets/styles/fooddisplay.css"
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

function FoodDisplay({ selectedCategory }) {
    const { food_data } = useContext(StoreContext);
    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_data.map((item, index) => {
                    if (selectedCategory === null || selectedCategory === item.category) {
                        return <FoodItem
                            key={index}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                            description={item.description}
                            category={item.category}
                        />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;