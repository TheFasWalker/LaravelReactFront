import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IauthSlice {
    token: string;
    isLoading: boolean;
    error: string;
}

const initialState: IauthSlice ={
    token: '',
    isLoading:false,
    error:'',
}

interface loginWithCookies{
    token:string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authWithCookies(state, action: PayloadAction<loginWithCookies>) {
            state.token=action.payload.token
        },
        authlogOut(state) {
            state.token=''
        },
        auth(state) {
            state.isLoading=true
        },
        authSuccsess(state, action: PayloadAction<>) {
            state.token = action.payload.token;
            state.isLoading = false;
        },
        authError(state, action: PayloadAction<>) {
            state.isLoading = false;
            state.error=action.payload.error[0].extensions.code;
        },
        authCleanErrors(state) {
            state.error =''
        }
    }
});

export default authSlice.reducer;
