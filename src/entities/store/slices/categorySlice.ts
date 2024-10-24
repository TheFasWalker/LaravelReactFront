import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, categoryData } from "../../types/categories";

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
        },
        categiriesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        categoriesDeleteById(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.data.data.filter((elem) => elem.id !== Number(action.payload));
        },
        categoriesCreate(state, action: PayloadAction<Category>) {
            state.isLoading = false;
            state.data.data.push(action.payload)
        },
        categoriesPatch(state, action: PayloadAction<Category>) {
            state.isLoading = true;
            let editingCategoryIndex;
            state.data.data.forEach((elem, index) => {
                if (elem.id == action.payload.id) {
                    return editingCategoryIndex = index;
                }
            })
            state.data.data = state.data.data.filter((elem) => elem.id !== action.payload.id);
            state.data.data.splice(Number(editingCategoryIndex), 0 , action.payload)
        }

    }
})
export default categorySlice.reducer;