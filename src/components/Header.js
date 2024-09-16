import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const Header = () => {

  const [button,setbutton] = useState("Login")

  // context is like a global place where you can manage your data and use it anywhere in your code. It avoids the biggest problem of props drilling
  const {loggedinUser} = useContext(UserContext)

  // This is the efficient way to optimize the performance
  const cartitems = useSelector((store)=> store.cart.items);
  // console.log(cartitems)

  // This is not the efficient way 
  /*
  const cartitem = useSelector((store)=> store);
  const store = cartitem.cart.items;
  */
 
  // console.log(user)
  return(
    <div className="
    flex justify-between px-10 items-center text-xl bg-orange-400">
      <div className="w-[70px]">
        <img
          alt="website-logo"
          src={LOGO_URL}
        />
      </div>
      <div>
        <ul className="flex text-white font-bold">
          <li className="px-10"><Link to="/">Home</Link></li>
          <li className="px-10"><Link to="/about">About</Link></li>
          <li className="px-10"><Link to="/contact">Contact</Link></li>
          <li className="px-10"><Link to="/grocery">Grocery</Link></li>
          <li className="px-10"><Link to="/cart">Cart - ({cartitems.length} items)</Link></li>
          <li className="px-10"><button className="button" onClick={()=>{
            button == "Login"?setbutton("Logout"):setbutton("Login")
          }}>{button}</button></li>
          <li className="px-10">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;