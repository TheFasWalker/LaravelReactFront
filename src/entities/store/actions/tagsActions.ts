import { fetchData } from "../../../shared/helpers/fetchData";
import { tagsData, tagsSlice } from "../slices/tagsSlice";
import { AppDispatch } from "../store";

export const getTags = (token:string) =>async (dispatch :AppDispatch)=>{
    try{
        dispatch(tagsSlice.actions.tagsFetching())
        const responce = fetchData<tagsData>('/tags',{
            method:'GET',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        dispatch(tagsSlice.actions.tagsFetchingSuccess((await responce).data))
    }catch(e:any){
        dispatch(tagsSlice.actions.tagsFetchingErrorr(e.message))
    }
}