import React, { useState } from "react";
import "../assets/styles/foodmenu.css"
import food_menu_items from "../assets/data/food-menu-items";

function FoodMenu({selectedCategory,setSelectedCategory}){

    return(
        <div className="food-menu-container" id="food-menu-container">
            <h2>Explore our menu</h2>
            <p className="food-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in modi asperiores suscipit et sequi necessitatibus recusandae veritatis eveniet omnis.</p>
            <div className="food-menu-list">
                {food_menu_items.map((item, key)=>{
                    return(
                        <div key={key} className="food-menu-list-item" onClick={()=>setSelectedCategory(selectedCategory===item.menu_name? null: item.menu_name)}>
                            <img className={selectedCategory===item.menu_name? "selected-category active": "selected-category"} src={item.item_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
export default FoodMenu;