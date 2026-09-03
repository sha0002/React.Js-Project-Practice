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
import { CartProvider } from './E-Commerce/Content/context'
import { Route, Routes } from 'react-router-dom'
import Login from './E-Commerce/Cred/Login'
import Register from './E-Commerce/Cred/Register'
// import MyComponent from './Todo/Timeset'
// import TodoAgain from './Todo/Todo-Again'
// import Posts from './crud system/Posts'

function App() {

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
      <Routes>
        <Route path="/" element={<Ecom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <CartProvider>
        <Ecom />
      </CartProvider> */}
      {/* -------------End----------------- */}




    </>
  )
}

export default App
