import React from 'react'
import { useCart } from './Content/context'

const SearchBar = () => {

    const { search, setSearch, filterSearch, addtoCart } = useCart()


    return (
        <div className='d-flex justify-content-center flex-column py-4'>
            <input type="text" name="search" className='' style={{width:"350px"}} placeholder='Products Search...' onChange={(e) => setSearch(e.target.value)} value={search} />

            <div className='position-relative'>
                {
                    search && (
                        <ul className='position-absolute bg-light p-2 rounded-3 m-0' style={{ zIndex: "1", width:"350px" }}>
                            {
                                filterSearch.length > 0 ? (
                                    filterSearch.map((item) => {
                                        return <li
                                            key={item.id}
                                            className="py-3 row align-items-center g-3 border-bottom"
                                        >
                                            {/* Image */}
                                            <div className="col-12 col-md-2 text-center text-md-start">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid rounded"
                                                    style={{
                                                        width: "100px",
                                                        height: "50px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>

                                            {/* Name */}
                                            <div className="col-12 col-md-4 text-center text-md-start">
                                                <span className="fw-semibold">{item.name}</span>
                                            </div>

                                            {/* Price */}
                                            <div className="col-12 col-md-2 text-center text-md-start">
                                                <span>Rs. {item.price}</span>
                                            </div>

                                            {/* Button */}
                                            <div className="col-12 col-md-4 text-center text-md-end">
                                                <button
                                                    className="btn text-dark fw-semibold px-4 py-3 rounded-4 border border-white border-opacity-25 bg-white bg-opacity-10 shadow-lg w-100 w-md-auto"
                                                    style={{ backdropFilter: "blur(12px)" }}
                                                    onClick={() => addtoCart(item)}
                                                >
                                                    Add to cart
                                                    <span className="ms-2">→</span>
                                                </button>
                                            </div>
                                        </li>

                                    })
                                ) : (
                                    <p className='p-3 col-12'>No Products Found</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div >
    )
}

export default SearchBar

