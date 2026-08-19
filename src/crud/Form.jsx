import React, { useEffect, useState } from 'react'
import { addPostData, updateData } from './FetchApi';

export default function Form({ post, setPost, updatedataApi, setUpdateDataApi }) {

    const [addPost, setAddPost] = useState({
        title: "",
        body: "",
    })

    // let isEmpty = Object.keys(updatedataApi).length === 0;
    let isEmpty = !updatedataApi || Object.keys(updatedataApi).length === 0;


    const handleAddData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log("Hello World...")

        setAddPost((perv) => {
            return {
                ...perv,
                [name]: value,
            }
        })
    }

    useEffect(() => {
        updatedataApi && setAddPost({
            title: updatedataApi.title || "",
            body: updatedataApi.body || "",
        })
    }, [updatedataApi])

    const handleAddPostData = async () => {
        const res = await addPostData(addPost)
        try {
            console.log(res.data)
            if ((res.status === 200 || res.status === 201)) {
                setPost([...post, res.data])
                setAddPost({
                    title: "",
                    body: "",
                })
            }
        } catch (error) {
            console.log("add post error...", error)
        }
    }

    const updatePostData = async () => {
        try {
            const res = await updateData(updatedataApi.id, addPost)
            console.log(res)
            if (res.status === 200) {
                setPost((prev) => {
                    return prev.map((curElem) => {
                        return curElem.id === res.data.id ? res.data : curElem;
                    })

                })
            }
            setAddPost({
                title: "",
                body: "",
            })
            setUpdateDataApi({})

        } catch (error) {
            console.log("error aagya h", error)
        }
    }


    const handleSubmitData = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        if (action === "Add") {
            handleAddPostData()
        } else if (action === "Edit") {
            updatePostData()
        }

    }

    return (
        <form onSubmit={handleSubmitData} className='d-flex justify-content-center align-items-center'>
            <div style={styles.container} className='shadow-lg w-50 border rounded py-2'>
                <input
                    type="text"
                    placeholder="Title"
                    value={addPost.title}
                    name='title'
                    // onChange={(e) => setInput1(e.target.value)}
                    onChange={handleAddData}
                    style={styles.input}
                />

                <input
                    type="text"
                    placeholder="Body"
                    value={addPost.body}
                    name='body'
                    // onChange={(e) => setInput2(e.target.value)}
                    onChange={handleAddData}
                    style={styles.input}
                />

                <button style={styles.button} value={isEmpty ? "Add" : "Edit"} className='w-25'>
                    {isEmpty ? "Add" : "Edit"}
                </button>
            </div>
        </form>
    );
}

const styles = {
    container: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "60px",
        backgroundColor: "#92a1cc",

    },
    input: {
        padding: "10px",
        width: "160px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "14px"
    },
    button: {
        padding: "10px 16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px"
    }
};
//   const handleAdd = () => {
//     alert(`Input 1: ${input1}, Input 2: ${input2}`);
//   };


