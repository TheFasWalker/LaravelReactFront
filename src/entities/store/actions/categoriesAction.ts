import { fetchData } from "../../../shared/helpers/fetchData";
import { Category, categoryData } from "../../types/categories";
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
        dispatch(categorySlice.actions.categiriesFetchingError(e.message))
    }
}
export const deleteCategoryById = (token: string, id: number) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoriesFetching());
        const responce = fetchData(`/category/${id}`, {
            method: 'DELETE',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        dispatch(categorySlice.actions.categoriesDeleteById(id))
    } catch (e:any) {
        dispatch(categorySlice.actions.categiriesFetchingError(e.message))
    }
}
export const createCategoty =(token: string, title: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoriesFetching());
        const data = {
            title:title
        }
        const responce = fetchData<Category>('/category', {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        dispatch(categorySlice.actions.categoriesCreate(await responce))

    } catch (e:any) {
        dispatch(categorySlice.actions.categiriesFetchingError(e.message))
    }
}

export const editCategory= (token: string, title: string, id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoriesFetching());
        const data = {
            title:title
        }
        const responce = fetchData<Category>(`/category/${id}`, {
            method: 'PATCH',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        dispatch(categorySlice.actions.categoriesPatch(await responce))

    } catch (e: any) {
        dispatch(categorySlice.actions.categiriesFetchingError(e.message))
    }
}