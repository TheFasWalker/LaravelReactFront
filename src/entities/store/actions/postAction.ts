import { fetchData } from "../../../shared/helpers/fetchData";
import { Iposts } from "../../types/posts";
import { postsSlice } from "../slices/postSlice";
import { AppDispatch } from "../store";


export const getPosts = (token:string, sorting:string='')=>async (dispatch:AppDispatch)=>{
   let query = '';
    if(sorting){
        query = `?${sorting}`
    }
    
    
    try{
        dispatch(postsSlice.actions.postFetching());
        const responce = fetchData<Iposts>(`/posts${query}`,{
            method:'GET',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        dispatch(postsSlice.actions.postFetchingSucsess(await responce))

    }catch(e:any){
        dispatch(postsSlice.actions.postFetchingError(e.message))    
    }
}