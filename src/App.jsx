import { useEffect, useState } from 'react'
import './App.css'
import Todo from './Todo/Todo'
import Posts from './crud/Posts'
import Cal from './Calculator/Cal'
import Todos from './Todos/todos'
import UseMemo from './UseMemo/UseMemo'
import { Counter } from './UseContext/Counter'
import { BioProvider } from './UseContext/ContextPrac'
import { Ecom } from './E-Commerce/Ecom'
import { CartProvider, useCart } from './E-Commerce/Content/context'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './E-Commerce/Cred/Login'
import Register from './E-Commerce/Cred/Register'
import Addtocard from './E-Commerce/Addtocard'
import Navbar from './E-Commerce/Navbar'
import Footer from './E-Commerce/Footer'
// import MyComponent from './Todo/Timeset'
// import TodoAgain from './Todo/Todo-Again'
// import Posts from './crud system/Posts'

function App() {

  // const { user, navigate } = useCart()

  const location = useLocation()

  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/register";


  return (

    <>

      {/* Todo list */}

      {/* <Todo /> */}
      {/* <TodoAgain /> */}
      {/* Crud Operator */}
      {/* <Posts /> */}
      {/* <Cal /> */}

      {/* <Todos /> */}

      {/* <UseMemo /> */}



      {/* -------------Start----------------- */}

      {/* <BioProvider>
        <Counter />
      </BioProvider> */}
      {/* -------------End----------------- */}



      {/* -------------Start----------------- */}
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
