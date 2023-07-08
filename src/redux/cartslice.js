import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items :[]
}

export const cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addtocart : (state,action)=>{
            // state.items += action.payload
            state.items.push(action.payload)

            // console.log(state.items)
        },
        removefromcart : (state,action)=>{
            const newarray = state.items.filter((items)=> items.id != action.payload.id)
            state.items = newarray


        }
    }
})
