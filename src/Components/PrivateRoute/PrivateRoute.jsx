import React from 'react'
import { Navigate } from 'react-router'

function PrivateRoute ({children, isAuth}) {
  const setIsAuth = isAuth

  return (
    isAuth ? children : <Navigate to ="/"/>
  )
}

export default PrivateRoute