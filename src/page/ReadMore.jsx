import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostsQuery } from '../features/apiSlice';


const ReadMore = () => {
    const { data: posts = [], isLoading } = useGetPostsQuery();
    
    const {id} = useParams()
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        title : '',
        body : ''
    })

    const handleGoBack = () => {
  navigate(-1); 
};

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
    <div className='w-full p-1'>
        <button onClick={handleGoBack} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-green-600 cursor-pointer">
            Back
        </button>
        <div className='flex items-center justify-center'>
            <div className='w-[400px] h-[300px] mt-[150px] p-4  rounded-md border border-gray-200 shadow-xl shadow-gray-100'>
            <h3 className='text-2xl font-bold mb-2'>{postData.title}</h3>
        <p className='text-gray-700'>{postData.body}</p>
        </div>
        </div>
    </div>
  )
}

export default ReadMore