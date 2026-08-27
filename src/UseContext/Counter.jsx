import React from 'react'
import { useAuth } from './ContextPrac'

export const Counter = () => {

    const { counter, setCounter, decrement, increment, removeLocalStorage } = useAuth()

    return (
        <div className=''>
            <h1 className='text-light mt-3 text-center'>Hello {counter}</h1>
            <div className='d-flex justify-content-center align-items-center'>

                <button type="button" className='btn btn-primary' onClick={decrement}>-</button>
                {/* <button type="button" className='btn btn-primary' onClick={() => { setCounter(counter - 1) }}>-</button> */}
                <p className='text-light fs-3 px-3'>
                    {counter}
                </p>
                {/* <button type="button" className='btn btn-primary' onClick={() => { setCounter(counter + 1) }}>+</button> */}
                <button type="button" className='btn btn-primary' onClick={increment}>+</button>
            </div>
            <div className='d-flex justify-content-center mt-4'>

                <button type="button" className='btn btn-primary' onClick={removeLocalStorage}>removeLocalStorage</button>
            </div>
        </div>
    )
}
