import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let route=createBrowserRouter([
    {
      path:'/',
      element:<About/>
    },
    {
      path:'/portfolio',
      element:<Portfolio/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/resume',
      element:<Resume/>
    }
  
  ])
function App() {
  

  return (
    <>
     <RouterProvider router={route}/>
     <ToastContainer />
    </>
  )
}

export default App
