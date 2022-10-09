
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import RouteConstants from '../../RoutesConstant'
export default function CreateProduct() {

  const navigate =useNavigate()
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const [image, setimage] = useState('')
  const [error, seterror] = useState('')
  const handleSubmit =(e)=>{
    
        e.preventDefault()
    
    
        fetch('http://localhost:8000/products',{
            method:'POST',
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
            <h3 class="card-title">Add Product</h3>
          </div>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Title"  onChange={(e)=>{settitle(e.target.value)}}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Price</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Price"  onChange={(e)=>{setprice(e.target.value)}}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Image</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="URL"  onChange={(e)=>{setimage(e.target.value)}}/>
              </div>
              <div class="form-group" onChange={(e)=>{setcategory(e.target.value)}}>
                <label>Select Category</label>
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Description</label>
                <textarea className="form-control" name="" id="" cols="30" rows="10" onChange={(e)=>{setdescription(e.target.value)}} placeholder='Enter Description'>
                </textarea>
              </div>



            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-success w-100">Create</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
