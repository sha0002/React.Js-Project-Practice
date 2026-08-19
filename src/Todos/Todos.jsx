import React, { useRef, useState } from 'react'
import { updateData } from '../crud/FetchApi'

export default function Todos() {

    const [todo, setTodo] = useState('')
    const [task, setTask] = useState([])
    const [alert, setAlert] = useState('')
    const [edit, setEdit] = useState(null)

    // const alertRef = useRef()


    const handleChange = (value) => {
        // console.log(value)
        setTodo(value)
    }


    function SubmitTodo(e) {
        e.preventDefault()
        if (!todo) {
            setAlert('Your Todo Input is Empty')
            setTimeout(() => {
                setAlert('')
            }, 2000);
            return setTodo('')
        }

        if (edit !== null) {
            const updatedTask = [...task]
            updatedTask[edit] = todo

            setTask(updatedTask)
            setTodo('')
            setEdit(null)
            return
        }

        if (task.includes(todo)) {
            setAlert("text already exist")
            setTimeout(() => {
                setAlert('')
            }, 2000);
            return setTodo("")
        }
        setTask((perv) => [...perv, todo])
        setTodo('')
    }

    function deleteTodo(value) {
        // console.log(value)
        const updateTodo = task.filter((del) => del !== value)
        setTask(updateTodo)
    }

    function editTodo(index) {
        setTodo(task[index])
        setEdit(index)
    }

    const AllClean = () => {
        // console.log("AllClean")
        setTask([])
    }


    return (
        <div className='text-light text-center'>
            <button className="btn btn-primary shadow-none" type="submit" id="button-addon2" onClick={AllClean}>AllClean</button>
            <form onSubmit={SubmitTodo}>


                <div>
                    <input type="text" className="px-4 py-2 mt-4" value={todo} onChange={(e) => handleChange(e.target.value)} placeholder="Your Task" />
                    <button className="btn btn-primary shadow-none px-5 w-25" type="submit" id="button-addon2">
                        {/* addTodo */}
                        {edit !== null ? 'Update Todo' : 'addTodo'}
                    </button>
                    {/* <p className='text-danger mt-3 fs-3 py-3' id='empty' ref={alertRef}></p> */}
                    <p className='text-danger mt-3 fs-5' id='empty'>{alert}</p>
                </div>
            </form>

            <div>
                <ul>
                    {
                        task.map((element, index) => {
                            return <li key={index}>
                                <span>{element}</span>
                                <button className='bg-danger m-2' onClick={() => { editTodo(index) }} >Edit</button>
                                {/* <button className='bg-danger m-2' >Edit</button> */}
                                <button className='bg-danger m-2' onClick={() => { deleteTodo(element) }} >Delete</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}



// import React, { useState } from 'react'

// export default function Todos() {

//     const [todo, setTodo] = useState('')
//     const [task, setTask] = useState([])
//     const [alert, setAlert] = useState('')
//     const [editIndex, setEditIndex] = useState(null)

//     const handleChange = (value) => {
//         setTodo(value)
//     }

//     function SubmitTodo(e) {
//         e.preventDefault()

//         if (!todo.trim()) {
//             return setTodo('')
//         }

//         // Edit existing todo
//         if (editIndex !== null) {
//             const updatedTask = [...task]
//             updatedTask[editIndex] = todo

//             setTask(updatedTask)
//             setTodo('')
//             setEditIndex(null)
//             return
//         }

//         // Check duplicate todo
//         if (task.includes(todo)) {
//             setAlert("text already exist")

//             setTimeout(() => {
//                 setAlert('')
//             }, 2000)

//             return setTodo('')
//         }

//         // Add new todo
//         setTask((prev) => [...prev, todo])
//         setTodo('')
//     }

//     function deleteTodo(index) {
//         const updateTodo = task.filter((_, i) => i !== index)
//         setTask(updateTodo)
//     }

//     function editTodo(index) {
//         setTodo(task[index])
//         setEditIndex(index)
//     }

//     const AllClean = () => {
//         setTask([])
//         setTodo('')
//         setEditIndex(null)
//     }

//     return (
//         <div className='text-light text-center'>

//             <button
//                 className="btn btn-primary shadow-none"
//                 type="button"
//                 onClick={AllClean}
//             >
//                 AllClean
//             </button>

//             <form onSubmit={SubmitTodo}>
//                 <div>
//                     <input
//                         type="text"
//                         className="px-4 py-2 mt-4"
//                         value={todo}
//                         onChange={(e) => handleChange(e.target.value)}
//                         placeholder="Your Task"
//                     />

//                     <button
//                         className="btn btn-primary shadow-none px-5 w-25"
//                         type="submit"
//                     >
//                         {editIndex !== null ? 'Update Todo' : 'addTodo'}
//                     </button>

//                     <p className='text-danger mt-3 fs-5'>
//                         {alert}
//                     </p>
//                 </div>
//             </form>

//             <div>
//                 <ul>
//                     {task.map((element, index) => (
//                         <li key={index}>
//                             <span>{element}</span>

//                             <button
//                                 className='bg-warning m-2'
//                                 onClick={() => editTodo(index)}
//                             >
//                                 Edit
//                             </button>

//                             <button
//                                 className='bg-danger m-2'
//                                 onClick={() => deleteTodo(index)}
//                             >
//                                 Delete
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     )
// }