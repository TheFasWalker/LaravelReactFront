import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryData } from "../../types/categories";

type categoriesData = {
    data: categoryData;
    isLoading: boolean;
    error: string;
  };

const initialState:categoriesData = {
    data:{
        data:[],
        links:{
            "first": "",
            "last": "",
            "prev": null,
            "next": ""
        },
        meta:{
            "current_page": 0,
            "from": 0,
            "last_page": 0,
            "links":[],
            "path": "",
            "per_page": 0,
            "to": 0,
            "total": 0
        }

    },
    isLoading:false,
    error:''
}

export const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        categoriesFetching(state){
            state.isLoading= true
        },
        categoriesFetchingSucsess(state, action :PayloadAction<categoryData>){
            state.isLoading=false;
            state.error='';
            state.data= action.payload;
        }
    }
})
export default categorySlice.reducer;