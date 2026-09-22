import React from 'react'
import { useCart } from './content/context'

const Addtocard = () => {

  const { cart, addtoCart, deleteCart, user, totalPrice } = useCart()
  return (
    <>
      <div className="container py-4">
        <div className='text-center fs-3 text-light'>
          <h2 className="mb-4">Shopping Cart</h2>
        </div>
        {
          cart.length === 0 ? (
            <p className='text-light fs-3 text-center'>Cart is Empty</p>
          ) : (
            <div className='row g-4'>
              {
                cart.map((item) => (
                  <div className="col-12" key={item.id}>
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <div className="row align-items-center">

                          {/* Product Image */}
                          <div className="col-3 col-md-2">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{
                                width: "100%",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                          {/* Product Name */}
                          <div className="col-9 col-md-4">
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="text-muted mb-0">
                              Price: ₹{item.price}
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="col-6 col-md-3 mt-3 mt-md-0">
                            <div className="d-flex align-items-center gap-2">
                              <button className="btn btn-outline-secondary btn-sm" onClick={() => deleteCart(item.id)}>
                                −
                              </button>

                              <span className="fw-bold">{item.qty}</span>

                              <button className="btn btn-outline-secondary btn-sm" onClick={() => addtoCart(item)}>
                                +
                              </button>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="col-6 col-md-3 mt-3 mt-md-0 text-md-end">
                            <h5 className="text-success mb-0">
                              ₹{item.price * item.qty}
                            </h5>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className='text-end fs-2 text-light mt-4 pe-4'>
                Total: ₹ {totalPrice}
              </div>
            </div>
          )
        }

      </div>
    </>
  )

}

export default Addtocard

