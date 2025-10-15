import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postContext } from '../context/ContextAPI'

const ReadMore = () => {
    const {id} = useParams()
    const {posts} = useContext(postContext)

    const [postData, setPostData] = useState({
        title : '',
        body : ''
    })

    useEffect( () =>{
        const numberId = Number(id)
        const postData = posts.find( (p)=> p.id === numberId)
        if(postData){
            setPostData({
                title : postData.title,
                body : postData.body
            })
        }
        // console.log(postData)
    },[id, posts])
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[400px] h-[300px] mt-[150px] p-4  rounded-md border border-gray-200 shadow-xl shadow-gray-100'>
            <h3 className='text-2xl font-bold mb-2'>{postData.title}</h3>
        <p className='text-gray-700'>{postData.body}</p>
        </div>
    </div>
  )
}

export default ReadMore