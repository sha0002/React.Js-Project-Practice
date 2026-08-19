import React, { useState, useEffect } from 'react'
import { MdDeleteForever } from "react-icons/md";

export default function Todo() {

    const [todo, settodo] = useState("")
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        const timestart = setInterval(() => {
            const now = new Date()
            const dateformat = now.toLocaleDateString()
            const timeformat = now.toLocaleTimeString()

            setDateTime(`${dateformat} - ${timeformat}`)
        }, 1000);

        // return () => clearInterval(timestart);

        return () => clearInterval(timestart);

    }, [])

    // console.log("hiii")

    const handlechange = (value) => {
        settodo(value)
    }

    const addSubmit = (e) => {
        e.preventDefault()
        if (!todo) {
            // const emptime = setTimeout(() => {
            //     const emptyElement = document.getElementById('empty');
            //     emptyElement.innerHTML = "This Value is Empty";

            //     setTimeout(() => {
            //         emptyElement.innerHTML = ""
            //     }, 5000)
            // }, 1000);
            //  const emptyElement = document.getElementById('empty');
            //     emptyElement.innerHTML = "This Value is Empty";
            return settodo("")
        }

        if (task.includes(todo)) {
            alert("Already Input Text")
            return settodo("")
        }

        setTask((prevtask) => [...prevtask, todo])

        settodo("")
    }

    function deleteTodo(value) {
        console.log(task)
        console.log(value)
        const updatetodo = task.filter((del) => del !== value)
        setTask(updatetodo)
    }

    function allClear() {
        setTask([])
    }




    return (
        <>
            <section className='text-center p-4 text-light'>
                <h1>To-Do List </h1>
                <p className='fs-3'>{dateTime}</p>
            </section>

            <section className='container'>
                <form onSubmit={addSubmit}>
                    <div className="row align-items-center justify-content-center">
                        <div className="input-group mb-3 w-25 ">
                            <input type="text" className="form-control" value={todo} onChange={(e) => handlechange(e.target.value)} placeholder="Your Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary shadow-none" type="submit" id="button-addon2">addTodo</button>
                            <p className='text-danger mt-3 fs-3' id='empty'></p>
                        </div>
                    </div>
                </form>
            </section>

            <section className='container'>
                <ul className='row align-items-center justify-content-center flex-column'>
                    {
                        task.map((curtask, index) => {
                            return <li key={index} className='w-25'>
                                <span className='text-light m-4 text-center'> {curtask} </span>
                                <button className='bg-danger w-25 m-2 ' onClick={() => deleteTodo(curtask)}><MdDeleteForever color='#FFFFFF' /></button>
                            </li>
                        })
                    }
                </ul>
            </section >


            <section className='container'>

                <div className="row align-items-center justify-content-center">
                    <div className=" mb-3 w-25 ">
                        <button className='btn btn-danger' onClick={allClear}>All Clear</button>
                    </div>
                </div>
            </section>





        </>
    )
}
