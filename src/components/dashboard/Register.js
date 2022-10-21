import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import RouteConstants from '../../RoutesConstant'

export default function Register() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email,password,username})
        fetch('http://localhost:8000/auth/register',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password,username})
        })
            .then((res)=>{
                navigate(RouteConstants.login)
            })
            .catch(()=>{

            })
    }
  return (
    <section className="bg-login">
    <div className="container">
        <div className="row align-content-center justify-content-center h-1500">
            <div className="col-12 col-md-6">
                <h1 className="display-4 text-white text-center text-bold text-wrap ">React Commerce</h1>
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Register Now</h3>
                    </div>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" >User Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" onChange={(e)=>{setusername(e.target.value)}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" onChange={(e)=>{setemail(e.target.value)}} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"onChange={(e)=>{setpassword(e.target.value)}} />
                            <label htmlFor="exampleInputPassword1" >Show Password</label>
                                <input type="checkbox" className='' onChange={()=>{}} name="" id="" />
                            </div>

                          
                        </div>
                        <div className="card-footer text-center">
                            <button type="submit" className="btn btn-success rounded rounded-pill w-100">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
