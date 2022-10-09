import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
export default function ViewCategory() {

  const [data, setdata] = useState('')
  const [error, seterror] = useState('')
  const [ispending, setispending] = useState(true)
  const [update, setupdate] = useState('')
  useEffect(() => {

    fetch('http://localhost:8000/categories')
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
    fetch(`http://localhost:8000/categories/${id}`,{method:'DELETE'})
      .then((response)=>{
        setupdate('updated')
      })
      .catch((error)=>{

      })

  }
  return (
    <>
  
    {ispending && <h1>Loading...</h1>}
     <div className="container">
      <div className="row py-5 justify-content-center">
        <div className="col-12 col-md-8">
          <div class="row">
            <div class="col-12">
              <div className="card">
                <div className="card-header bg-dark">
                  <h3 className="card-title ">Categories</h3>
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
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Category Name</th>

                      </tr>
                    </thead>
                    <tbody>
                      {data&&data.map((category)=>(
                        <tr>
                        <td>{category.id}</td>
                        <td>{category.title}</td>
                        <td><button className='btn btn-danger' onClick={()=>{handleDelete(category.id)}} >Delete</button></td>
                        <td><Link className='btn btn-secondary' to={`/dashboard/editcategory/${category.id}`} >Edit</Link></td>

                        </tr>
                        ))}

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
