import React, { useState } from 'react'
import { useCart } from '../Content/context'
import { Link } from 'react-router-dom'

const Login = () => {

    const { handleLogin, setEmail, setPassword, email, password,hideshow,setHideShow } = useCart()


    // const handleShow = () => {
    //     setHideShow(!hideshow)
    // }


    return (

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4">Login</h3>

                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className='position-relative'>
                                        <input
                                            type={hideshow ? ("text") : ("password")}
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                        />
                                        <button type='button' onClick={() => setHideShow(!hideshow)} className='position-absolute btn btn-primary top-0' style={{ left: "85%" }}>{hideshow ? "hide" : "show"}</button>
                                    </div>
                                    {/* <div> */}
                                    {/* </div> */}
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>

                                <div className='text-end py-2'>
                                    <span>Don't have a Account? <Link to='/register' className='text-decoration-none'>Register</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login