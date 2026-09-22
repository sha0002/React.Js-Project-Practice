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
import ProductsCard from './ProductsCard'


export const Ecom = () => {

    const { addtoCart, user, navigate } = useCart()
    // const { name, addtoCart, cart } = useCart()
    const [loading, setLoading] = useState(true);

    // const product = products.slice(0, 8);
    const product = useMemo(() => products.slice(0, 8), [products])

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


                <ProductsCard product={product} loading={loading} />

 
            </div>
        </>
    )
}


