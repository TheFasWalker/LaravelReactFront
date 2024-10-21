import { FC } from "react"
import { Navigate,Outlet } from "react-router-dom"

export const ProtectedRoute:FC =()=>{

    return !false ? <Navigate to="/404" replace/> : <Outlet/>

}