// src/components/EditModal.jsx
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postContext } from "../context/ContextAPI";
import { toast } from "react-toastify";

const EditModal = () => {
  const {id} = useParams()
  const { updatePost,posts } = useContext(postContext);
  const navigate = useNavigate()
  
    const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const numericId = Number(id);
    const foundPost = posts.find((p) => p.id === numericId);
    if (foundPost) {
      setFormData({
        title: foundPost.title,
        body: foundPost.body,
      });
    }
  }, [id, posts]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  };
  const handleCancel = () => {
    // setIsModalOpen(false);
    navigate('/')
  }

  const handleSave = () => {
    
    if (formData.title.trim() === "" || formData.body.trim() === "") {
      alert("⚠️ Please fill out all fields before saving!");
      return}; // stop saving
      updatePost(Number(id), formData);
    navigate('/')
     toast.success("Post saved successfully!");
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Post</h2>

        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Title"
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter Body"
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-sky-400 resize-none"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;




{/* <EditModal
          title={formData.title}
          body={formData.body}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
        /> */}
