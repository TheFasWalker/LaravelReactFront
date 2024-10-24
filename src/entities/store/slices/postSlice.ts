import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iposts } from "../../types/posts";

type postData= {
    data: Iposts
    isLoading:boolean,
    error:string
}

const initialState:postData ={
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


export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postFetching(state){
                state.isLoading = true
        },
        postFetchingError(state,action:PayloadAction<string>){
            state.isLoading = false,
            state.error = action.payload
        },
        postFetchingSucsess(state,action:PayloadAction<Iposts>){
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        }
    }

})

export default postsSlice.reducer;