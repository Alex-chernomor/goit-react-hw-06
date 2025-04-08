import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'items',
    initialState: {
        items: []
    },
    reducers:{
        addItems:(state,action)=>{
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        },
        deleteItems:(state, action) =>{
            return {
                ...state,
                items: state.items.filter(item=>item.id !== action.payload)
            }
        }
    } 
});

export default slice.reducer;

export const {addItems, deleteItems} = slice.actions

