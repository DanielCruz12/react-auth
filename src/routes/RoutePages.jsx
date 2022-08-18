import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Home from '../pages/Home'

const RoutePages = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default RoutePages;