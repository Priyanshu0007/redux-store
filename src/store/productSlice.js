import { createSlice } from "@reduxjs/toolkit";

export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});
const productSlice=createSlice({
    name:'product',
    initialState:{
        products:[],
        isLoading:false
    },
    reducers:{
        getDataFetch:(state)=>{state.isLoading=true;},
        getDataSuccess:(state,action)=>{
            state.products=action.payload;
            state.isLoading=false;
        },
        getDataFailture:(state)=>{
            state.isLoading=false;
        }

    },
});
export const{getDataFailture,getDataSuccess,getDataFetch}=productSlice.actions;

export default productSlice.reducer;
