import { json } from "react-router-dom";
import { fetchData } from "../../../shared/helpers/fetchData";
import { CreateTag, Itag, Itags, tagData } from "../../types/tags";
import { tagsSlice } from "../slices/tagsSlice";
import { AppDispatch } from "../store";

export const getTags = (token:string) =>async (dispatch :AppDispatch)=>{
    try{
        dispatch(tagsSlice.actions.tagsFetching())
        const responce = fetchData<Itags>('/tags',{
            method:'GET',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        dispatch(tagsSlice.actions.tagsFetchingSuccess((await responce)))
    }catch(e:any){
        dispatch(tagsSlice.actions.tagsFetchingErrorr(e.message))
    }
}
export const deleteTagById = (token:string, id:string) =>(dispatch: AppDispatch)=>{
    try{
        dispatch(tagsSlice.actions.tagsFetching())
        const responce =  fetchData(`/tags/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        dispatch (tagsSlice.actions.tagsDeleteById(id))
    }catch(e:any){
        dispatch(tagsSlice.actions.tagsFetchingErrorr(e.message))
    }
}
export const createTag = (token:string, title: string)=>async(dispatch:AppDispatch)=>{
    try{
        dispatch(tagsSlice.actions.tagsFetching())
        const data = {
            title:title
        }
        const responce = fetchData<Itag>(`/tags`,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        dispatch(tagsSlice.actions.tagsCreate(await responce))
    }catch(e:any){
        dispatch(tagsSlice.actions.tagsFetchingErrorr(e.message))
    }
}
export const editTag = (token:string, title:string,id:string) => async (dispatch :AppDispatch)=>{
    try{
        dispatch(tagsSlice.actions.tagsFetching())
        const data = {
            title : title
        }
        const responce = fetchData<Itag>(`/tags/${id}`,{
            method:"PATCH",
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        dispatch(tagsSlice.actions.tagsPatch(await responce))

    }catch(e:any){
        dispatch(tagsSlice.actions.tagsFetchingErrorr(e.message))
    }
}