import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Collect from './components/cards/collection.jsx'
import Form from './components/Create/create.jsx'
import Single from './components/singlepost/singlepost.jsx'
import Login from './components/login/login.jsx'
import SignUp from './components/signup/signup.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Collect/>}/>
    <Route path='/create' element={<Form/>}/>
    <Route path='/cre/:postid' element={<Single/>}/>
    <Route path='/update/:postid' element={<Form/>}/>
    {/* <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/> */}
    
    <Route path='*' element={<h1>not found</h1>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
