import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const {user,loding} = useAuth();

    if(loding){
        return <h1>loding...</h1>
    }
    return (
       <Route
       
       {...rest}
       render={({location})=>{
          return user.email ? children : <Redirect
           to={{
            pathname: "/login",
            state: { from: location }
          }}
           
           />
       }}
       
       
       />
    )
}

export default PrivateRoute
