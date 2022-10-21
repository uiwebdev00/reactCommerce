import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'

import RouteConstants from '../../RoutesConstant'
export default function Login() {
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email,password});
        fetch('http://localhost:8000/auth/signin',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
               
                localStorage.setItem('token',data.accessToken)
                navigate(RouteConstants.dashboard)
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
                                <h3 className="card-title">Login</h3>
                            </div>
                            <form onSubmit={(e)=>{handleSubmit(e)}}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" onChange={(e)=>{setemail(e.target.value)}} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}  />
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Keep me Signed in</label>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-success rounded rounded-pill w-100">Log In</button>
                                    <hr />
                                    <h6 className='text-center text-muted'>or</h6>
                                    <hr />
                                    <Link to={RouteConstants.signup} className="link-muted">Register Now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
