import { useEffect, useState } from 'react'
import React from 'react'
import { getPost, deletePost } from './FetchApi'
import Form from './Form'
import Timeset from '../Todo/Timeset'

export default function Posts() {

    const [post, setPost] = useState([])
    const [updatedataApi, setUpdateDataApi] = useState({})


    const getPostData = async () => {
        const response = await getPost()
        // console.log("hello World,")
        setPost(response.data)
        console.log(response.data)
    }

    const handledeletePost = async (id) => {
        try {

            console.log('test-1')
            const del = await deletePost(id)

            console.log(del)

            // if (del.status === 200) {
            //     const newupdateData = post.filter((curl) => {
            //         return curl.id !== id;
            //     })

            //     setPost(newupdateData)
            // }

            if (del.status === 200) {
                const updateData = post.filter((cur) => {
                    return cur.id !== id;
                })
                setPost(updateData)
            }
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getPostData()
    }, [])

    const handleupdatePost = (curelement) => {
        setUpdateDataApi(curelement)
    }


    return (
        <>

            {/* <section className='container d-flex justify-content-center align-items-center mt-3'>
                <Timeset />
            </section> */}
            <section className='container d-flex justify-content-center align-items-center'>
                <Form post={post} setPost={setPost} updatedataApi={updatedataApi} setUpdateDataApi={setUpdateDataApi} />
            </section>

            <div className='text-light container'>
                {/* <h3>Hello World,</h3> */}
                <div className="row ">

                    {
                        post.map((curelement) => {
                            const { id, title, body } = curelement;
                            return (
                                <div key={id} className=' col-4'>
                                    <ul className='border p-2 text-light bg-dark'>
                                        <li>{id}</li>
                                        <li>Title:{title}</li>
                                        <li>Body:{body}</li>
                                        <div className='row'>
                                            <div className=''>
                                                <button className='btn btn-primary col-4 me-3' onClick={() => handleupdatePost(curelement)}>Edit</button>
                                                <button className='btn btn-danger col-4' onClick={() => handledeletePost(id)} >Delete</button>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
