import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Ecom } from './ecommerce/Ecom'
import Addtocard from './ecommerce/Addtocard'
import Footer from './ecommerce/Footer'
import Navbar from './ecommerce/Navbar'
import Login from './ecommerce/Cred/Login'
import Register from './ecommerce/Cred/Register'
function App() {

  // const { user, navigate } = useCart()

  const location = useLocation()

  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/register";


  return (


    <> {/* -------------Start----------------- */}
      {/* E-commerce website  */}
      <Navbar />
      {/* {!hideHeaderFooter && <Navbar />} */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Ecom />} />
        <Route path="/cart" element={<Addtocard />} />
        {/* <Route path="/cart" element={user ? <Addtocard /> : <navigate to="/login" replace />} /> */}

        {/* <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Ecom />} />
          <Route path="/cart" element={<Addtocard />} />
        </Route> */}

      </Routes >
      {/* <Footer /> */}
      {!hideHeaderFooter && <Footer />}

      {/* <CartProvider>
        <Ecom />
      </CartProvider> */}
      {/* -------------End----------------- */}




    </>
  )
}

export default App
