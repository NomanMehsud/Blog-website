import React, { useContext } from "react";
import cart from '../assets/cart.json'
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const {items} = useSelector( (state) => state.cart)
  const dispatch = useDispatch()

  const removeHandle = ()=>{
    toast.error("Item removed from cart")
  }
  const handleClear = ()=>{
      dispatch(clearCart())
    toast.success('removed all the post from favourite')
 

  }
  return (
    <div className="">
      <div className="w-full flex-col items-center p-5">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Back to Home
        </Link>
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-2xl font-bold">🛒 Your Favorite Posts</h2>
        <button
            onClick={handleClear}
            className="bg-gray-700 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Clear Cart
          </button>
        </div>

        {items?.length > 0 ? (
          
          <div className="w-[400px] grid grid-cols-1 gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
                <button
                  onClick={ () => {dispatch(removeFromCart(item.id)); removeHandle()}}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className=" h-[500px] flex items-center justify-center">
            <Lottie animationData={cart} className="w-90 h-90" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
