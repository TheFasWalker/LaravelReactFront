import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../../pages/HomePage"
import { AdminHomePage } from "../../pages/Admin/AdminHomePage"
import { Categories } from "../../pages/Admin/Categories"
import { Firms } from "../../pages/Admin/Firms"
import { Login } from "../../pages/Admin/Login"
import { Posts } from "../../pages/Admin/Posts"
import { Tags } from "../../pages/Admin/Tags"
import { Users } from "../../pages/Admin/Users"
import { ErrorPage } from "../../pages/ErroPage"
import { AdminLayout } from "../../shared/ui/layout/AdminLayout"
import { ProtectedRoute } from "./ProtectedRoute"

export const Navigation: FC = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/*' element={<ErrorPage />} />

                <Route element={<ProtectedRoute/>}>
                    <Route path='/data' element={<AdminLayout />}>
                        <Route index element={<AdminHomePage />} />
                        <Route path='posts' element={<Posts />} />
                        <Route path='categories' element={<Categories />} />
                        <Route path='tags' element={<Tags />} />
                        <Route path='firms' element={<Firms />} />
                        <Route path='users' element={<Users />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}