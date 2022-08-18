import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
//import Home from '../pages/Home'
import Register from '../pages/Register'

const RoutePages = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
{/*             <Route exact path='/' element={<Home/>}/>
 */}            <Route exact path='/' element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default RoutePages;