import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'filters',
    initialState:{
        name:'',
    },
    reducers:{
        searchName:(state,action)=>{
          state.name=action.payload
        }
    }
})

export const { searchName } = slice.actions;
export default slice.reducer;