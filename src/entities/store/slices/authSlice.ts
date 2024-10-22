import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState{
    token:string,
    isLoading:boolean,
    error:string
    name:string,
    email:string,
    role:string
}

interface AuthSucsess {
    status: string
    message: string
    data: Data
  }
  
 interface Data {
    token: string
    user: User
  }
  
interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
    role: string
    created_at: string
    updated_at: string
    deleted_at: any
    role_id: number
  }
  
interface loginWithCookies{
    token:string,
    name:string,
    email:string,
    role:string
}
 interface ServerError {
    status: string
    message: string
  }
const initialState: authState ={
    token:'',
    name:'',
    email:'',
    role:'',
    isLoading:false,
    error:''
}
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        auth(state){
            state.isLoading=true
        },
        authWithCookies(state,action:PayloadAction<loginWithCookies>){
            state.token = action.payload.token   
            state.email=action.payload.email
            state.name=action.payload.name   
            state.role=action.payload.role   
        },
        authSuccess(state, action :PayloadAction<AuthSucsess>){
            state.isLoading=false
            state.token = action.payload.data.token
            state.name= action.payload.data.user.name
            state.email = action.payload.data.user.email
            state.role = action.payload.data.user.role

        },
        authError(state,action:PayloadAction<ServerError>){
            state.isLoading = false
            state.error = action.payload.message
        },
        authLogOut(state){
            state.token = ''
            state.name= ''
            state.email = ''
            state.role = ''
        },
        authCleanError(state){
            state.error = ''
        }
    }
})

export default authSlice.reducer;