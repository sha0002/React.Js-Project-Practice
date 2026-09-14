import React, { useEffect, useState } from 'react'
import { products } from './products'
// import Addtocard from './Addtocard'
import Button from './Button'
import Addtocard from './Addtocard'
import { useCart } from './Content/context'
import SearchBar from './SearchBar'
import { Routes, Route, Link } from "react-router-dom";
// import Login from './Cred/Login'
import { FaShoppingCart } from "react-icons/fa";
import ShoppingBanner from './Banner'
import { useMemo } from 'react'


export const Ecom = () => {

    const { addtoCart, user, navigate } = useCart()
    // const { name, addtoCart, cart } = useCart()
    const [loading, setLoading] = useState(true);

    // const product = products.slice(0, 8);
    const product = useMemo(() => products.slice(0, 8)[products])

    useEffect(() => {
        console.log(products)
        setTimeout(() => {
            if (product && product.length) {
                setLoading(false)
            }
        }, 1000);
    }, [product])


    return (

        <>
            {/* <div>

             
                <div>
                    <Link to="/login">Login</Link><br></br>
                    <Link to="/register">Create Account</Link>
                </div>

            </div> */}


            <ShoppingBanner />


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
                        product.map((product, index) => {
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
                                                    // onClick={() => addtoCart(product)}
                                                    onClick={() => {
                                                        user ? (addtoCart(product)) : (navigate('/login'))
                                                    }}
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

                {/* <Addtocard /> */}
            </div>
        </>
    )
}


