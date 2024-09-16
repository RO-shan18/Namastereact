import { LIST_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { AddItem, RemoveItem } from "../utils/cartSlice";

const ItemCards = ({ items }) => {

  const dispatch = useDispatch();

  const HandleAddItem = (item)=>{
    dispatch(AddItem(item));
  }

  return items.map((item, index) => {
    return (
      <div data-testid="fooditems"
        key={item.card.info.id}
        className="text-left border border-solid border-b-slate-300 p-4 flex justify-between px-4"
      >
        <div className="flex flex-col w-9/12">
          <span>{item.card.info.name}</span>

          {item.card.info.defaultPrice ? 
          (<span>₹{item.card.info.defaultPrice / 100}</span>) : 
          (<span>₹{item.card.info.price / 100}</span>)}
        </div>
        <div className="w-3/12 relative">
          {item.card.info.imageId && (
            <img
              className=" w-28 h-28 rounded-lg"
              src={LIST_URL + item.card.info.imageId}
            />
          )}

          <button className="absolute px-6 bg-white rounded-lg  text-green-700 font-semibold border border-solid border-green-300 mx-[6px] bottom-1 flex justify-between">
            <span onClick={()=> HandleAddItem(item)}>ADD</span>
          </button>
        </div>
      </div>
    );
  });
};

export default ItemCards;
