import React, { useState } from "react";
import Header from "../components/header";
import FoodMenu from "../components/FoodMenu";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";

function Home(){
    const[selectedCategory, setSelectedCategory]= useState(null);
    return(
        <>
        <Header />
        <FoodMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <FoodDisplay selectedCategory={selectedCategory}/>
        <AppDownload/>
        </>
    )
}

export default Home;