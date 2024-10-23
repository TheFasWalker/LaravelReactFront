import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itag, Itags } from "../../types/tags";

type tagsData= {
    data: Itags
    isLoading:boolean,
    error:string
}

const initialState:tagsData = {
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

export const tagsSlice = createSlice({
    name:'tags',
    initialState,
    reducers:{
        tagsFetching(state){
            state.isLoading = true
        },
        tagsFetchingSuccess(state, action:PayloadAction<Itags>){
            state.isLoading= false;
            state.error = '';
            state.data = action.payload
        },
        tagsFetchingErrorr(state, action:PayloadAction<string>){
            state.isLoading=false;
            state.error= action.payload
        },
        tagsDeleteById(state,action:PayloadAction<string>){
            state.isLoading=false;
            state.data.data = state.data.data.filter((elem)=>elem.id !== Number(action.payload))
        },
        tagsCreate(state,action:PayloadAction<Itag>){
            state.isLoading = false;
            state.data.data.push(action.payload)
        },
        tagsPatch(state,action:PayloadAction<Itag>){
            state.isLoading = true;

            let edittingTagIndex;
            state.data.data.forEach((elem,index)=>{
                if(elem.id == action.payload.id){
                    return edittingTagIndex = index
                }
            })
            state.data.data= state.data.data.filter((elem)=>elem.id !== action.payload.id)
            state.data.data.splice(Number(edittingTagIndex), 0 , action.payload)
        }

    }
})
export default tagsSlice.reducer;