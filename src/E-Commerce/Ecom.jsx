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
    const [loading, setLoading] = useState(true);

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
            <ShoppingBanner />
            <div className='container'>
                <ProductsCard product={product} loading={loading} /> 
            </div>
        </>
    )
}


