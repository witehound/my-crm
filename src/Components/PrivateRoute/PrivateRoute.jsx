import React from 'react'
import { Route } from 'react-router'

const isAuth = true
function PrivateRoute ({children},...rest) {

  return (
    <Route
     render={()=> (
         isAuth ? {children} : <Route path='/'/>
     )
     }
    />
  )
}

export default PrivateRoute