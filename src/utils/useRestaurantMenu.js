import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_MENU } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resMenu, setresMenu] = useState(null);
    const {resid} = useParams();

    useEffect(()=>{
        getMenu();
    },[])

    const getMenu = async()=>{
        let data = await fetch(RES_MENU + resid);

        let json = await data.json();

        setresMenu(json?.data?.cards);
    }

    return resMenu;
}

export default RestaurantMenu;