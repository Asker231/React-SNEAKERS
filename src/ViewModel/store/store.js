import { configureStore } from "@reduxjs/toolkit";
import AddCard from "./slices/AddCard";


const store  = configureStore({
    reducer:{
        cards:AddCard
    }
})
export default store