import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const postContext = createContext()

const ContextAPI = ({children}) => {
    const [posts, setPosts] = useState([])
    const [searchItem, setSearchItem]  = useState("")
    const fetchPost = async ()=>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data.slice(0,20))
            console.log(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect( () =>{
        fetchPost()
    },[])

    // updatepost
    const updatePost = async (id, updatedData)=>{
        try {
            const res = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,updatedData)

            setPosts( (prev)=>
                prev.map( (post)=>
                post.id === id ? {...post, ...res.data} : post
                )
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    // deletepost

    const deletepost = async (id)=>{
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPosts( (prev) => prev.filter( (post) => post.id !== id))

        } catch (error) {
            console.log(error.message)
        }
    }

    // add new post

    const addPost = async (newPostData) => {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPostData
    );
    const uniquePost = { ...res.data, id: Date.now() };
    setPosts((prev) => [uniquePost, ...prev]);
    // console.log("New post added:", res.data);
  } catch (error) {
    console.log(error.message);
  }
};

  return (
    <postContext.Provider value={{posts, updatePost,deletepost,addPost,searchItem, setSearchItem}}>
        {children}
    </postContext.Provider>
  )
}

export default ContextAPI