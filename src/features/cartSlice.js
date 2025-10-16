import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name : 'cart',
    initialState : { items : []},
    reducers : {
        addToCart : (state, action) =>{
            const item = action.payload
            const exist = state.items.find( (i) => i.id === item.id)
            if(exist){
                toast.warning("Already in favourites!");
                return
            }
           return{
            ...state,
            items:[
                ...state.items,item
            ]
            
           }
        },
        removeFromCart : (state, action) =>{
            state.items = state.items.filter( (i) => i.id !== action.payload)
        },
        clearCart: (state) => {
      state.items = [];
    },
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer