import { createSlice, current } from "@reduxjs/toolkit";

const CartItems = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
         AddItem : (state, action)=>{
            // vanilla redux
            // This is how we mutate the state in vanilla 
           return{
            ...state,
               items : [...state.items, action.payload]
            }
            

         // new reduxtoolkit let you to mutate state directly because of immer which works BTS
         // state.items.push(action.payload);
         },

         RemoveItem : (state, action)=>{
            console.log(current(state));

            // It will not change the actual state 
            /*
            state = []; 
            console.log(state);  
            */
            state.items.splice(action.payload, 1);
         },

         ClearCart : (state)=>{

            // It will works same as below
            // return {items : []};

            state.items.length = 0;
         }
    }   
})

export const {AddItem, RemoveItem, ClearCart} = CartItems.actions; 
export default CartItems.reducer;