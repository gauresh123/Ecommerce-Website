import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val : [],
}

export const firstSlice = createSlice({
    name : "first",
    initialState,

    reducers: {
        add: (state,action)=>{
            state.val.push(action.payload);
        },
        remove:(state,action)=>{
            let a = state.val.filter((itm)=> itm.id !== action.payload);
            state.val = a;
        },
        
    }
})

export const {add,remove} = firstSlice.actions;

export default firstSlice.reducer;


