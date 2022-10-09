import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import RouteConstants from '../../RoutesConstant'
export default function CreateCategory() {
  const navigate =useNavigate()
  const [title, settitle] = useState('')
  const [error, seterror] = useState('')
  const handleSubmit =(e)=>{
    
        e.preventDefault()
    
    
        fetch('http://localhost:8000/categories',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({title})
        })
            .then((response)=>{
                navigate(`/dashboard${RouteConstants.vcategory}`)
            })
            .catch((error)=>{
                seterror(error.message)
            })



  }

  return (
    <div className="container ">
      <div className="row py-5">
        <div className="col-12">
        <div class="card-header bg-dark">
                <h3 class="card-title">Add Category</h3>
        </div>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Category Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{settitle(e.target.value)}}  placeholder="Enter Category" />
              </div>
            
             
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button type="submit" className="btn btn-success w-100">Create</button>
            </div>
          </form>
          {error && <h1>{error}</h1>}
        </div>

      </div>
    </div>
  )
}
