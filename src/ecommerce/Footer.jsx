import React from 'react'

const Footer = () => {
    return (


        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">About Us</h5>
                        <p className="text-muted">
                            We provide quality products and services to help
                            businesses grow and succeed.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Quick Links</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Contact Us</h5>

                        <p className="text-muted mb-2">
                            123 Main Street, Delhi, India
                        </p>

                        <p className="text-muted mb-2">
                            info@example.com
                        </p>

                        <p className="text-muted mb-0">
                            +91 98765 43210
                        </p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="text-muted mb-0">
                        2026 Your Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer