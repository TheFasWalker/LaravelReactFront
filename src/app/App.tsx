import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserData } from "../pages/UserData";
import { HomePage } from "../pages/HomePage";
import { Posts } from "../pages/Posts";
import { Categories } from "../pages/Categories";
import { Tags } from "../pages/Tags";
import { Firms } from "../pages/Firms";
import { Users } from "../pages/Users";
import { Mainlayout } from "../shared/ui/layout/MainLayoyt";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/data' element={<Mainlayout/>}>
      <Route path='/data' element={<HomePage/>}/>
      <Route path='posts' element ={<Posts/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='tags' element={<Tags/>}/>
      <Route path='firms' element={<Firms/>}/>
      <Route path='users' element={<Users/>}/>
    </Route>
    <Route path="/user" element={<UserData/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
