import React from 'react'
import { useCart } from './content/context'

export default function Button({ product }) {

    const { addtoCart, user, navigate } = useCart()


    return (
        <button
            className="btn text-dark fw-semibold px-4 py-3 rounded-4 border border-white border-opacity-25 bg-white bg-opacity-10 shadow-lg"
            style={{
                backdropFilter: "blur(12px)",
            }}
            onClick={() => {
                user ? (addtoCart(product)) : (navigate('/login'))
            }}
        >
            Add to cart
            <span className="ms-2">→</span>
        </button>
    )
}
