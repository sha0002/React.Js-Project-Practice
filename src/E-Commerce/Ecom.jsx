import React, { useState } from 'react'
import { products } from './products'
// import Addtocard from './Addtocard'
import Button from './Button'
import Addtocard from './Addtocard'
import { useCart } from './Content/context'
import SearchBar from './SearchBar'

export const Ecom = () => {

    const { name, addtoCart, cart } = useCart()

    console.log(products)



    return (
        <div className='container'>
            <div>
                <h1 className='text-light fs-1 text-center mt-4'>Fashion Design {name}</h1>
                <SearchBar />
            </div>

            <div className="row">
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
            </div>

            <Addtocard />
        </div>
    )
}



// const Addtocard = ({cart}) => {
//     return (
//         <div className='text-center text-light fs-1 my-4'>Add To Card</div>

//         {
//         cart === 0 ? (
//             <p>cart is empty</p>
//         ) : (
//             cart.map
//         )
//     }
//     )
// }

// export default Addtocard