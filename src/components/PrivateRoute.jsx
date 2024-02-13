import React from 'react'
import {Navigate} from "react-router-dom" 

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("login")
    if(token!=null){
        return children
    }else{
        return
        <Navigate to='/'></Navigate>
    }
}
export default PrivateRoute
