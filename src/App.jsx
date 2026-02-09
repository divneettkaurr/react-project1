import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './app/Home/Home'
import { FcAbout } from 'react-icons/fc'
import About from './app/About/About'
import Services from './app/Services/Services'

const App = () => {
  
  const router=createBrowserRouter([{

    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
       {
        path:"/about",
        element:<About/>
      },
       {
        path:"/services",
        element:<Services/>
      }
    ]

  }])
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
