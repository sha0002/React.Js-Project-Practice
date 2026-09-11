import React from 'react'

const Footer = () => {
    return (


        <footer class="bg-dark text-white pt-5 pb-3">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">About Us</h5>
                        <p class="text-muted">
                            We provide quality products and services to help
                            businesses grow and succeed.
                        </p>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">Quick Links</h5>

                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="#" class="text-white text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-white text-decoration-none">
                                    About Us
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-white text-decoration-none">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-white text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">Contact Us</h5>

                        <p class="text-muted mb-2">
                            123 Main Street, Delhi, India
                        </p>

                        <p class="text-muted mb-2">
                            info@example.com
                        </p>

                        <p class="text-muted mb-0">
                            +91 98765 43210
                        </p>
                    </div>

                </div>

                <hr class="border-secondary" />

                <div class="text-center">
                    <p class="text-muted mb-0">
                        2026 Your Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer