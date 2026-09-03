import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FireBase/firebase'
import { useCart } from '../Content/context'

const Register = () => {

    const { handleRegister, setEmail, email, setPassword, password } = useCart()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">

                            <h3 className="text-center mb-4">Registration</h3>

                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        // value={}
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Create Account
                                </button>
                            </form>

                            <div className='mt-3'>
                                <p className='text-center'>
                                    <Link to={'/login'} className='text-center'>Sign In</Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register