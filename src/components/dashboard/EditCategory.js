import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import RouteConstants from '../../RoutesConstant'

export default function EditCategory() {
    const navigate =useNavigate()
    const{id}=useParams()
    const [title, settitle] = useState('')
    
    const [data, setdata] = useState('')
    const [error, seterror] = useState('')
    const [ispending, setispending] = useState(true)
 
  useEffect(() => {

    fetch(`http://localhost:8000/categories/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then((data) => {

        setdata(data)
        setispending(false)
      })
      .catch((error) => {
        seterror(error)
        setispending(false)

      })

  }, [])
    const handleSubmit =(e)=>{
      
          e.preventDefault()
      
      
          fetch(`http://localhost:8000/categories/${id}`,{
              method:'PATCH',
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
                  <h3 class="card-title">Update Category</h3>
          </div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Category Name</label>
                  {data&&<input type="text" className="form-control" id="exampleInputEmail1" defaultValue={data.title} onChange={(e)=>{settitle(e.target.value)}}  placeholder="Enter Category" />}
                </div>
              
               
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-success w-100">Update</button>
              </div>
            </form>
            {error && <h1>{error}</h1>}
          </div>
  
        </div>
      </div>
    )
}
