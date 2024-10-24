import { createSlice } from "@reduxjs/toolkit";
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
    reducers:{}

})

export default postsSlice.reducer;