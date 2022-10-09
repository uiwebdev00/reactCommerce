import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
export default function ViewProduct() {
  const [data, setdata] = useState('')
  const [error, seterror] = useState('')
  const [ispending, setispending] = useState(true)
  const [update, setupdate] = useState('')

  useEffect(() => {

    fetch('http://localhost:8000/products')
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

  }, [update])
  const handleDelete =(id)=>{
    setupdate('')
    fetch(`http://localhost:8000/products/${id}`,{method:'DELETE'})
      .then((response)=>{
          setupdate('updated')
      })
      .catch((error)=>{

      })

  }
  return (
    <>
      {ispending && <h1>Loading...</h1>}
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-12">
            <div class="row">
              <div class="col-12">
                <div className="card">
                  <div className="card-header bg-dark">
                    <h3 className="card-title ">All Products</h3>
                    <div className="card-tools">
                      <div className="input-group input-group-sm">
                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Image</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data&& data.map(product=>(<tr className='w-100'>
                          <td>{product.id}</td>
                          <td>{product.title}</td>
                          <td>{product.price}</td>
                          <td>{product.category}</td>
                          <td> <a href={product.image} target="_blank">View</a></td>
                          <td>{product.description}</td>
                      
                          <td><button className='btn btn-danger' onClick={()=>{handleDelete(product.id)}} >Delete</button></td>
                          <td><Link className='btn btn-secondary' to={`/dashboard/editproduct/${product.id}`} >Edit</Link></td>
                          
                        </tr>))}
                      
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}


              </div>
            </div>
          </div>
        </div>
      </div>
      {error && <h1>{error}</h1>}
    </>
  )
}
