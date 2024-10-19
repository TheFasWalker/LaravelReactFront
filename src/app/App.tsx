import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHomePage } from "../pages/Admin/AdminHomePage";
import { Posts } from "../pages/Admin/Posts";
import { Categories } from "../pages/Admin/Categories";
import { Tags } from "../pages/Admin/Tags";
import { Firms } from "../pages/Admin/Firms";
import { Users } from "../pages/Admin/Users";
import { AdminLayout } from "../shared/ui/layout/AdminLayout";
import { Login } from "../pages/Admin/Login";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErroPage";




function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/data' element={<AdminLayout/>}>
      <Route path='/data' element={<AdminHomePage/>}/>
      <Route path='posts' element ={<Posts/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='tags' element={<Tags/>}/>
      <Route path='firms' element={<Firms/>}/>
      <Route path='users' element={<Users/>}/>
    </Route>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/error' element={<ErrorPage/>}/>

    </Routes>
  </BrowserRouter>

  );
}

export default App;
