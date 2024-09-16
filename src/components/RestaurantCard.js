import {LIST_URL} from "../utils/constants"

const RestaurantCard = (props) => {
  let { resdata } = props;
  let { name, cloudinaryImageId, costForTwo, cuisines, avgRatingString } =
    resdata.info;
  return (
    <div data-testid="rescards">
      <img
        className="w-[300px] h-[215px] rounded-lg"
        alt="res-logo"
        src={
          LIST_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-semibold">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

export default RestaurantCard;

export const withpromotedcard = (RestaurandCard) =>{
  return (props)=>{
    return(
      <div className="">
        <label className="bg-gray-800 text-white px-4 rounded-md absolute">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};
