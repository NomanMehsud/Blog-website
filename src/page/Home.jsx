import React, { useContext, useEffect, useState } from "react";
import Card from "../component/Card";
import AddPostModal from "../component/AddPostModel";
import notfound from "../assets/notfound.json";
import loading from "../assets/loading.json";
import Lottie from "lottie-react";
import HeroSection from "../component/HeroSection";
import { toast } from "react-toastify";
import Contact from "../component/Contact";
import About from "../component/About";
import { useCreatePostsMutation, useGetPostsQuery } from "../features/apiSlice";

const Home = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  const [createPost, { isLoadingPost, isError, isSuccess }] = useCreatePostsMutation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [searchTerm, setSearchTerm] = useState('')

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen w-[100%] bg-white ">
        <Lottie animationData={loading} className="" />
      </div>
    );
  if (error) return <p>Error fetching posts</p>;

  const filterPosts = data.filter( (post)=>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (newPost.title.trim() === "" || newPost.body.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }
    try {
      const res = await createPost(newPost).unwrap();
      console.log(res);
      console.log(data);
      setShowAddModal(false);
      setNewPost({ title: "", body: "" });

      toast.success("New post added successfully!");
    } catch (error) {
      console.error("Failed to add post:", error);
    }
  };
  const handleCancel = () => {
    setShowAddModal(false);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="w-[100%] bg-gray-100">
      <HeroSection onSearchChange={(value) => setSearchTerm(value)}/>
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
            {filterPosts?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filterPosts?.map((post) => (
                  <Card key={post.id} post={post} />
                ))}
              </div>
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
          <Contact />
        </div>
        <About />
      </div>
    </div>
  );
};

export default Home;
