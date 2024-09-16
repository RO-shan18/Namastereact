import React, { Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {Header} from "./components/Header"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Restaurantmenu from "./components/RestaurantMenu"
import Error from "./components/Error"
import { lazy } from "react"
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/userContext"
import appStore from "./utils/appStore"
import {Provider} from "react-redux"
import Cart from "./components/Cart"

const AppLayout = ()=>{
  const [username, setusername] = useState("");

  useEffect(()=>{
    // Authentication
    const data = {
      name : "Roshan Mehra"
    }

    setusername(data.name);

  },[])

  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedinUser: username, setusername}}>
    <div>
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  )
}

const Grocery = lazy(()=> import("./components/Grocery"))
//creating a router configuration
const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      
      {
        path : "/about",
        element : <About/>,
      },
    
      {
        path : "/contact",
        element : <Contact/>,
      },

      {
        path : "/restaurant/:resid",
        element : <Restaurantmenu/>
      },

      {
        path : "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
      },

      {
        path : "/cart",
        element: <Cart/>
      }
    ],
    errorElement : <Error/>,
  }
])

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>); 
