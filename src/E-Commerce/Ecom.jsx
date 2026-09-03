import React, { useEffect, useState } from 'react'
import { products } from './products'
// import Addtocard from './Addtocard'
import Button from './Button'
import Addtocard from './Addtocard'
import { useCart } from './Content/context'
import SearchBar from './SearchBar'
import { Routes, Route, Link } from "react-router-dom";
import Login from './Cred/Login'
// import App from '../App'

export const Ecom = () => {

    const { name, addtoCart, cart } = useCart()
    // const { name, addtoCart, cart } = useCart()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log(products)
        setTimeout(() => {
            if (products && products.length) {
                setLoading(false)
            }
        }, 1000);
    }, [products])



    return (

        <>
            {/* <div>

             
                <div>
                    <Link to="/login">Login</Link><br></br>
                    <Link to="/register">Create Account</Link>
                </div>

            </div> */}

            <div className='d-flex justify-content-between align-items-center p-2 bg-light mb-3 px-1 px-md-5'>
                {/* <h1 className='text-light fs-1 text-center mt-4'>Fashion Design {name}</h1> */}
                <h1 className='text-dark fs-4 text-center'>Fashion Design {name}</h1>
                <SearchBar />
                <div>
                    {/* <Link to="/login">Login</Link> */}
                    <button className='btn btn-dark'>
                        <Link to="/register" className='text-light text-decoration-none'>Create Account</Link>
                    </button>
                </div>
            </div>
            <div className='container'>

                <div className="row">
                    {loading ? (
                        <div className="col-12 text-center py-5">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3 text-light">Loading products...</p>
                        </div>
                    ) : (
                        products.map((product, index) => {
                            return (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                    key={index}
                                >
                                    <div className="card h-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="card-img-top img-fluid"
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <div className="card-body">
                                            <h3 className="card-title fs-5">
                                                {product.name}
                                            </h3>

                                            <p className="card-text">
                                                ₹{product.price}
                                            </p>

                                            <div>
                                                <button
                                                    className="btn text-dark fw-semibold px-4 py-3 rounded-4 border border-white border-opacity-25 bg-white bg-opacity-10 shadow-lg"
                                                    style={{
                                                        backdropFilter: "blur(12px)",
                                                    }}
                                                    onClick={() => addtoCart(product)}
                                                >
                                                    Add to cart
                                                    <span className="ms-2">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* <div className="row">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                                    <div className="card h-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="card-img-top img-fluid"
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <div className="card-body">
                                            <h3 className="card-title fs-5">{product.name}</h3>
                                            <p className="card-text">₹{product.price}</p>
                                            <div>
                                                <button
                                                    className="btn text-dark fw-semibold px-4 py-3 rounded-4 border border-white border-opacity-25 bg-white bg-opacity-10 shadow-lg "
                                                    style={{ backdropFilter: "blur(12px)" }}
                                                    onClick={() => addtoCart(product)}
                                                >
                                                    Add to cart
                                                    <span className="ms-2">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div> */}

                <Addtocard />
            </div>
        </>
    )
}


