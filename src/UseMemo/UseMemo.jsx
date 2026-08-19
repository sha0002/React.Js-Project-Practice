import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0)

    const expMemo = (num) => {
        console.log("Hello, I Am Expensive")
        for (let i = 0; i <= 1000000000; i++) { }
        return num * 2
    }

    // const expMemo = (num) => {
    //     console.log("Hello, I Am Expensive")
    //     for (let i = 0; i <= 1000000000; i++) { }
    //     return num * 2
    // }

    const value = useMemo(() => expMemo(input), [input])



    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='py-5'>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <p className='text-light text-center m-0 fs-3'>Count: {count}</p>
                <button type="button" className='py-2 px-4 my-4 btn btn-outline-light' onClick={() => setCount(count + 1)} >Increament</button>

                <p className='text-light text-center fs-3'>Value: {value}</p>
            </div>
        </div>
    )
}
