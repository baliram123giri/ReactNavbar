import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./style/style.css"
import { routes } from './routes/Routes'


export default function App() {
  return (
   <BrowserRouter>
     <Routes>
      {
        routes.map((data, index)=>{
          return(
            <Route path={data.route} element={data.element} key={index}/>
          )
        })
      }
     </Routes>
   </BrowserRouter>
  )
}
