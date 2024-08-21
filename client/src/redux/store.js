import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slice"
const store=configureStore({
    reducer:{
        user:useReducer
    }
})
export default store