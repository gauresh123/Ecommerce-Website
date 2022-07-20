import { configureStore } from "@reduxjs/toolkit";
import firstSliceReducer from "./firstSlice";

export const store = configureStore({
    reducer:{
        first : firstSliceReducer
    }
});