import { fetchData } from "../../../shared/helpers/fetchData";
import { categoryData } from "../../types/categories";
import { categorySlice } from "../slices/categorySlice";
import { AppDispatch } from "../store";

export const getCategories = (token:string)=> async (dispatch: AppDispatch)=>{
    try{
        dispatch(categorySlice.actions.categoriesFetching())
        const responce = fetchData<categoryData>('/category',{
            method:'GET',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        dispatch(categorySlice.actions.categoriesFetchingSucsess((await responce)))
    }catch(e:any){
        console.log(e)
    }
}