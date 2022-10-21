import React, {  useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


export default function Auth() {
  
   const authToken =localStorage.getItem('token')

  return (
    <>
        { authToken ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>}
    </>
  )
}
