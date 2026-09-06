import React from 'react'
import { useCart } from './Content/context'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {

    const { handleLogout, user, name, cartCount } = useCart()

    return (
        <div className='d-flex justify-content-between align-items-center p-2 bg-light mb-3 px-1 px-md-5'>
            {/* <h1 className='text-light fs-1 text-center mt-4'>Fashion Design {name}</h1> */}
            <Link className='text-dark fs-5 text-center text-decoration-none fw-bold' to={'/'}>Fashion Design {name}</Link>
            <SearchBar />
            <div className='d-flex'>
                <Link className='me-2 text-dark text-decoration-none fs-4' to="/cart">

                    <FaShoppingCart size={36} />
                    cart({cartCount})
                </Link>
                {/* <Link to="/login">Login</Link> */}
                {
                    user ? (
                        <>
                            {/* <p>{user.email}</p> */}
                            <button className='btn btn-dark' onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button className='btn btn-dark'>
                                <Link to="/login" className='text-light text-decoration-none'>Login</Link>
                            </button>
                        </>
                    )
                }

            </div>

        </div>
    )
}
