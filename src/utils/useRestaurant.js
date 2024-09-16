import { RESTAURANT } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer"

const RestaurantList = ()=>{
    const [Restaurant, setRestaurant] = useState(null);
    const [filteredrestaurant, setfilteredrestaurant] = useState(null);
    
    useEffect(()=>{
        getrestaurant();
    },[])

    const getrestaurant = async()=>{
        let data = await fetch(RESTAURANT);
        let json = await data.json();

        setRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setfilteredrestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    return [Restaurant, filteredrestaurant, setfilteredrestaurant];
}

export default RestaurantList;