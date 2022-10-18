import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import RouteConstants from '../../RoutesConstant'
export default function EditProduct() {
    
    const{id}=useParams()
    const navigate =useNavigate()
    const [data, setdata] = useState()
    const [getcategory, setgetcategory] = useState()
    const [ispending, setispending] = useState(true)
    const [title, settitle] = useState()
    const [price, setprice] = useState()
    const [description, setdescription] = useState()
    const [category, setcategory] = useState()
    const [image, setimage] = useState()
    const [error, seterror] = useState()
    useEffect(() => {

      fetch('http://localhost:8000/categories')
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status)
          }
          return response.json()
        })
        .then((data) => {
  
          setgetcategory(data)
          setispending(false)
        })
        .catch((error) => {
          seterror(error)
          setispending(false)
  
        })
  

        fetch(`http://localhost:8000/products/${id}`)
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
      
      
          fetch(`http://localhost:8000/products/${id}`,{
              method:'PATCH',
              headers:{'content-type':'application/json'},
              body:JSON.stringify({title,price,description,image,category})
          })
              .then((response)=>{
                  navigate(`/dashboard${RouteConstants.vproduct}`)
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
              <h3 class="card-title">Upadte Product</h3>
            </div>
            {ispending && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data&&<form onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Title</label>
                  <input type="text"   defaultValue={data.title} className="form-control" id="exampleInputEmail1" placeholder="Enter Title"  onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Price</label>
                  <input type="text"   defaultValue={data.price} className="form-control" id="exampleInputEmail1" placeholder="Enter Price"  onChange={(e)=>{setprice(e.target.value)}}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Image</label>
                  <input type="text"   defaultValue={data.image} className="form-control" id="exampleInputEmail1" placeholder="URL"  onChange={(e)=>{setimage(e.target.value)}}/>
                </div>
                <div class="form-group"  onChange={(e)=>{setcategory(e.target.value)}}>
                  <label>Select Category</label>
                  <select class="form-control" defaultValue={data.category} >
                  {getcategory&& getcategory.map((category)=>(<option>{category.title}</option>))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Description</label>
                  <textarea className="form-control"  defaultValue={data.description}  name="" id="" cols="30" rows="10" onChange={(e)=>{setdescription(e.target.value)}} placeholder='Enter Description'>
                  </textarea>
                </div>
  
  
  
              </div>
  
              <div className="card-footer">
                <button type="submit" className="btn btn-success w-100">Update</button>
              </div>
            </form>}
          </div>
  
        </div>
      </div>
    )
  }
