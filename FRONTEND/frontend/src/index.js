import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import App from "./App";
import Successfull from "./Successfull";
import Fail from "./Fail";

const root=ReactDom.createRoot(document.getElementById('root'))

root.render(
<div>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/success" element={<Successfull/>}></Route>
    <Route path="/fail" element={<Fail/>}></Route>
   </Routes>
  </BrowserRouter>
</div>
)