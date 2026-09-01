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

      {/* <BioProvider>
        <Counter />
      </BioProvider> */}



      <CartProvider>
        <Ecom />
      </CartProvider>


    </>
  )
}

export default App
