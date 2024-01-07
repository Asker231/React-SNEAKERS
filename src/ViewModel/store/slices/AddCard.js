import { createSlice } from "@reduxjs/toolkit";

const AddCard = createSlice({
    name:"Card",
    initialState:{
        arrCard:[]
    },
    reducers:{
        addCard(state,action){
            state.arrCard.push(action.payload)
        },
        removeCard(state,action){
          state.arrCard = state.arrCard.filter((el)=>el.id != action.payload)
        }
    }
})
export const {addCard,removeCard} = AddCard.actions
export default AddCard.reducer