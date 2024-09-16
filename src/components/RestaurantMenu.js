import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Category from "./Category";
import {useState} from "react";

const RestaurantMenu = () => {
  let resmenu = useRestaurantMenu();

  const [showindex, setshowindex] = useState(null)

  if (resmenu === null) return <Shimmer />;

  const category = resmenu[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (cat) => {
      return (
        cat?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    }
  );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-8">{resmenu[0].card.card.text}</h1>
      {category.map((cat, index) => (
        <div key={index}>
       <Category  key={cat.card.card.title} data={cat.card.card} showItems={index===showindex} 
       setshowindex={()=>{setshowindex(index === showindex ? null : index )}} />
        </div>
      ))}
      
    </div>
  );
};

export default RestaurantMenu;
