import React, { useContext, useState } from "react";
import Card from "../component/Card";
import { postContext } from "../context/ContextAPI";
import AddPostModal from "../component/AddPostModel";
import notfound from '../assets/notfound.json'
import Lottie from "lottie-react";
import HeroSection from "../component/HeroSection";
import { toast } from "react-toastify";
import Contact from "../component/Contact";
import About from "../component/About";

const Home = () => {
  const { posts, addPost, searchItem } = useContext(postContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const filterPosts = posts.filter( (post)=>
    post.title.toLowerCase().includes(searchItem.toLowerCase())
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (newPost.title.trim() === "" || newPost.body.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }

    addPost(newPost);
    setShowAddModal(false);
    setNewPost({ title: "", body: "" });
    toast.success("New post added successfully!");
  };
  const handleCancel = () => {
    setShowAddModal(false);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="w-[100%] bg-gray-100">
      <HeroSection/>
    <div className="">
      
    <div className=" px-10 flex flex-col justify-center">
      <div className="flex items-center justify-between mt-8 mb-4">
      <h3 className="text-2xl font-bold">Latest Post</h3>
      <button
        onClick={() => setShowAddModal(true)}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-green-600 mb-1 cursor-pointer"
      >
        Add New Post
      </button>
      </div>
      
      <div>
        {filterPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">{
          filterPosts.map((post) => <Card key={post.id}  post={post} />)
}</div>
        ) : (
          <div className="flex items-center justify-center h-screen w-[100%] bg-white ">
      <Lottie animationData={notfound} className="" />
    </div>
        )}
        {showAddModal && (
          <AddPostModal
            title={newPost.title}
            body={newPost.body}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
      <Contact/>
      
    </div>
    <About/>
    </div>
    </div>
  );
};

export default Home;
