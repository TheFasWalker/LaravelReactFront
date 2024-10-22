import { writeCookies } from "../../../shared/helpers/cookies";
import { fetchData } from "../../../shared/helpers/fetchData";
import { authResult } from "../../types/authResult";
import { authSlice } from "../slices/authSlice";
import { AppDispatch } from "../store";

export const autorisation = (email:string ,password:string)=>async(dispatch: AppDispatch)=>{
    try{
        dispatch(authSlice.actions.auth())
        const data = {
            email:email,
            password:password
        }

        const responce = fetchData<authResult>('/auth',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
        });
        dispatch(authSlice.actions.authSuccess(await responce));
        writeCookies('loginCookies', (await responce).data.token);
        
    }catch(e:any){
        dispatch(authSlice.actions.authError(e))

    }
}