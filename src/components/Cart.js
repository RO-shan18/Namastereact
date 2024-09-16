import { useDispatch, useSelector } from "react-redux";
import { ClearCart } from "../utils/cartSlice";
import ItemCards from "./ItemCards";

const Cart = () => {

  const dispatch = useDispatch();

  const HandleClearCart = ()=>{
    dispatch(ClearCart());
  }

  const itemcart = useSelector((store)=> store.cart.items)
  console.log(itemcart)
  return (
    <div>
      <div className="text-xl m-5 pt-5 pb-3 text-center"> Cart </div>
      <h1 className="bg-black text-white rounded-lg text-center w-[7%] mx-auto font-semibold p-2" onClick={HandleClearCart}>Clear Cart</h1>
      <ItemCards items={itemcart} />
    </div>
  );
};

export default Cart;
