import React, { createContext, useState } from "react";
import { food_data } from "../assets/data/food-data";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
    const deliverFee =300;

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            const quantity = cartItems[item];

            if (quantity > 0) {
                const itemInfo = food_data.find(
                    (product) => product.id === Number(item)
                );

                if (itemInfo) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
        }

        return totalAmount;
    };

    const contextValue = {
        food_data,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        deliverFee
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;