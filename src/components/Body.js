import RestaurantCard, { withpromotedcard } from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import InternetError from "./InternetError";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchtext, setsearchtext] = useState("");

  const [restaurant, filteredrestaurant, setfilteredrestaurant] = useRestaurant();

  // console.log(filteredrestaurant)

  const Promotedrestaurantcard = withpromotedcard(RestaurantCard);

  const onlinestatus = useOnlineStatus();
  // console.log(onlinestatus);

  const { setusername, loggedinUser } = useContext(UserContext);

  if (!onlinestatus) {
    return <InternetError />;
  }

  return restaurant == null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-evenly my-5">
        {/* Search for restaurant */}
        <div>
          <input data-testid="search"
            className="border-solid border-2 border-gray-400 rounded-md px-2 py-1"
            type="text"
            placeholder="Search......"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="bg-slate-400 px-3 py-1 rounded-md mx-4 text-white font-bold"
            onClick={() => {
              let filteredres = restaurant.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });

              setfilteredrestaurant(filteredres);
            }}
          >
            Search
          </button>
        </div>

        {/* Filtereing the restaurant */}
        <button
          className="text-slate-100 font-semibold bg-blue-400 px-3 py-1 rounded-md"
          onClick={() => {
            let filteres = restaurant.filter((res) => res.info.avgRating > 4.4);
            setfilteredrestaurant(filteres);
          }}
        >
          High Rated Restaurant
        </button>

        {/* Changing the logged in user */}
        <div>
          Username:{" "}
          <input
            type="text"
            placeholder="username.."
            className="px-2 border border-solid border-black rounded-lg"
            value={loggedinUser}
            onChange={(e) => {
              setusername(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-[60px] justify-center">
        {filteredrestaurant.map((restaurant) => {
          return (
            <Link
              className="w-[20%] bg-gray-200 text-xl p-2 rounded-lg hover:shadow-md"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {/* if promoted is true then display restaurantcardpromoted */}
              {restaurant.info.promoted ? (
                <Promotedrestaurantcard resdata={restaurant} />
              ) : (
                <RestaurantCard resdata={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
