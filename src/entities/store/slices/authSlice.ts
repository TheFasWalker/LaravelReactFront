import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState{
    token:string,
    isLoading:boolean,
    error:string
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
    role: number
    created_at: string
    updated_at: string
    deleted_at: any
    role_id: number
  }
  
interface loginWithCookies{
    token:string
}
 interface ServerError {
    status: string
    message: string
  }
const initialState: authState ={
    token:'',
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
            
        },
        authSuccess(state, action :PayloadAction<AuthSucsess>){
            state.isLoading=false
            state.token = action.payload.data.token
            console.log('state')
            console.log(state.token)
        },
        authError(state,action:PayloadAction<ServerError>){
            state.isLoading = false
            state.error = action.payload.message
        },
        authLogOut(state){
            state.token = ''
        },
        authCleanError(state){
            state.error = ''
        }
    }
})

export default authSlice.reducer;