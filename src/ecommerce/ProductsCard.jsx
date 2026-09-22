import React from 'react'
import Button from './Button';

function ProductsCard({ product, loading }) {

    return (
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
                                        <span className='fw-bold text-primary'>Title: </span>{product.name}
                                    </h3>

                                    <p className="card-text mb-1">
                                        <span className='fw-bold text-primary'>Category: </span>{product.category}
                                    </p>
                                    <p className="card-text">
                                        <span className='fw-bold text-primary'>Price: </span> ₹{product.price}
                                    </p>

                                    <div>
                                        <Button product={product} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    )
}

export default ProductsCard;