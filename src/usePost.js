import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function usePost(resource,data,url) {
    const navigate =useNavigate()
    const [error, seterror] = useState('')
    fetch(resource,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
        .then((response)=>{
            navigate(url)
        })
        .catch((error)=>{
            seterror(error.message)
        })

  return {error}
}
