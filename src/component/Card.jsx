import React, { useContext, useState } from "react";
import { postContext } from "../context/ContextAPI";
import image from "../assets/card_img.jpg"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const Card = ({ post }) => {
    const {deletepost } = useContext(postContext);
    const dispatch = useDispatch()
    const cartItems = useSelector( (state)=> state.cart.items)

    const isAdded = cartItems.some( (item)=> item.id === post.id)


  const navigate = useNavigate()

  const handleEdit = () => {
    // setIsModalOpen(true)
    navigate(`/editmodel/${post.id}`);
  };

  const handleAddToCart = () => {
    // addToCart(post);
    if(!isAdded){
      dispatch(addToCart(post))
    toast.success("Item added successfully")
    } else{
      dispatch(removeFromCart(post.id))
          toast.error("Item removed from favourite")
    } 
    
  };



  const handleDelete = () =>{
    const confirm = window.confirm("Are you sure you want to delete this post?");
  if (confirm) {
    deletepost(post.id); // your delete function
    toast.success("Post deleted successfully!");
  } else {
    toast.info("Delete canceled!");
  }
  }

  return (
    <div >
    <div className="max-w-sm bg-white rounded-xl flex flex-col justify-between h-full">
  <img src={image} alt="" />

  <div className="flex-1 p-3">
    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
    <p className="text-gray-700">{post.body}</p>
  </div>

  <div className="flex flex-col gap-2 p-3 rounded-b-xl mt-auto">
      <button onClick={handleAddToCart} className={`px-4 py-2 rounded text-white ${
            isAdded ? "bg-green-500 " : "bg-sky-500 hover:bg-sky-600"
          }`}>{isAdded? 'Added to favourite' : 'Add to favorite'}</button>
      <div className="flex gap-2">
        <button onClick={handleEdit} className="w-full text-center py-2 px-4 rounded-lg bg-sky-600/30 text-sky-600 font-semibold hover:bg-sky-600/40 transition-colors cursor-pointer">Edit</button>
        <button onClick={handleDelete} className="w-full text-center py-2 px-4 rounded-lg bg-red-500/20 text-red-500 font-semibold hover:bg-red-500/30 transition-colors cursor-pointer">Delete</button>
      </div>
  </div>
</div>

      
        

      
    
    </div>
  );
};

export default Card;
