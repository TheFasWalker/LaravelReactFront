import { FC } from "react"
import { Navigate,Outlet } from "react-router-dom"
import { useAppSelector } from "../../shared/hooks/redux"


export const ProtectedRoute:FC =()=>{
    const authState = useAppSelector((state)=>state.authReduser.token)
    return authState ?<Outlet/>: <Navigate to="/404" replace/>

}