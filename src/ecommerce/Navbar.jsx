import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from './content/context'

export default function Navbar() {

    const { handleLogout, user, name, cartCount } = useCart()

    return (
        <div className='d-flex justify-content-between align-items-center p-2 bg-light px-1 px-md-5'>
            <Link className='text-dark fs-5 text-center text-decoration-none fw-bold' to={'/'}>Fashion Design {name}</Link>
            <SearchBar />
            <div className='d-flex'>
                <Link className='me-3 text-dark text-decoration-none fs-4 position-relative' to={user ? ('/cart') : ('/login')}>
                    <FaShoppingCart size={36} />
                    cart {user ? (<>
                        <span className="position-absolute top-0 start-100 translate-middle
                                badge rounded-pill bg-danger
                                d-flex align-items-center justify-content-center"
                            style={{
                                minWidth: "20px",
                                height: "20px",
                                fontSize: "11px",
                                padding: "0 5px",
                                border: "2px solid white",
                            }}>{cartCount}</span>
                    </>) : ('')}
                </Link>
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
