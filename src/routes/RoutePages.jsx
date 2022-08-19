import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutePages = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
            <Route exact path='/' element={<Register/>}/>
            <Route exact path='/dashboard' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default RoutePages;