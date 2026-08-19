import React, { useState } from 'react'

export default function TodoAgain() {

    const [inputValue, setInputValue] = useState('')
    const [task, setTask] = useState([])

    const handleChange = (value) => {
        setInputValue(value)
    }

    const addTodo = (e) => {
        e.preventDefault()

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            alert("already added")
            return;
        }

        setTask((prev) => [...prev, inputValue])

        setInputValue('')
    }



    return (

        <>
            <header className='text-center container text-light my-4'>
                <h2>
                    To Do List
                </h2>
            </header>

            <section className='container d-flex align-items-center justify-content-center'>
                <form onSubmit={addTodo} className='col-6 row align-items-center justify-content-center p-4'>
                    <input type="text" className="form-control w-50 shadow-none" placeholder="your to-do list" onChange={(e) => handleChange(e.target.value)} value={inputValue} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-danger w-25 shadow-none" type="submit" id="button-addon2">AddTodo</button>

                </form>

            </section>
            <section className='container'>
                <ul className='row align-items-center justify-content-center flex-column'>
                    {
                        task.map((cur, index) => {
                            return <li className='text-light text-center w-25' key={index}>
                                    <span>{cur}</span>
                                    <button className='bg-danger w-25 m-2 '>delete</button>
                            </li>
                        })
                    }
                </ul>
            </section>

        </>
    )
}
