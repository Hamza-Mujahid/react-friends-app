import React from 'react'
import { Routes as ReactRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const MyRoutes = () => {
    return (
        <ReactRouter>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
        </ReactRouter>
    )
}

export default MyRoutes
