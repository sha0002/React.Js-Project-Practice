import React from 'react'
import { useCart } from './content/context'
import Button from './Button'

const SearchBar = () => {

    const { search, setSearch, filterSearch, addtoCart, user } = useCart()


    return (
        <div className='d-flex justify-content-center flex-column py-4'>
            <input type="text" name="search" className='' style={{ width: "350px" }} placeholder='Products Search...' onChange={(e) => setSearch(e.target.value)} value={search} />

            <div className="position-relative">
                {search && (
                    <ul
                        className="position-absolute bg-light p-2 rounded-3 m-0"
                        style={{
                            zIndex: "1000",
                            width: "350px",
                            maxHeight: "300px",
                            overflowY: "auto",
                            overflowX: "hidden",
                        }}
                    >
                        {filterSearch.length > 0 ? (
                            filterSearch.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className="py-2 row align-items-center g-2 border-bottom"
                                    >
                                        {/* Image */}
                                        <div className="col-3 text-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded"
                                                style={{
                                                    width: "60px",
                                                    height: "40px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        {/* Name */}
                                        <div className="col-5">
                                            <span className="fw-semibold small">
                                                {item.name}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="col-4">
                                            <span className="small">
                                                Rs. {item.price}
                                            </span>
                                        </div>

                                        {/* Button */}
                                        <div className="col-12">
                                            {/* <button
                                                className="btn btn-sm text-dark fw-semibold rounded-3 border border-white border-opacity-25 bg-white bg-opacity-10 shadow-sm w-100"
                                                style={{
                                                    backdropFilter: "blur(12px)",
                                                }}
                                                onClick={() => addtoCart(item)}
                                            >
                                                Add to cart
                                                <span className="ms-2">→</span>
                                            </button> */}
                                            {
                                                user ? (<Button product={item}/>):(<p>user not login</p>)
                                            }
                                            
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <p className="p-3 m-0">No Products Found</p>
                        )}
                    </ul>
                )}
            </div>
        </div >
    )
}

export default SearchBar

