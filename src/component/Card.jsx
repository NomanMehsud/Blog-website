import image from "../assets/card_lmg.jpg"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeletePostMutation, useGetPostsQuery } from "../features/apiSlice";

const Card = ({ post }) => {
const { data: posts = [], refetch } = useGetPostsQuery();
  const [deletePost, { isLoading: deleting }] = useDeletePostMutation();
    const dispatch = useDispatch()
    const cartItems = useSelector( (state)=> state.cart.items)

    const isAdded = cartItems.some( (item)=> item.id === post.id)


  const navigate = useNavigate()
  const handleReadMore = () =>{
    navigate(`readmore/${post.id}`)
  }
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
   const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
       const deldata = await deletePost(post.id).unwrap();
      //  setPosts((prev) => prev.filter((p) => p.id !== post.id));
      console.log(deldata)
      toast.success("🗑️ Post deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("❌ Failed to delete post!");
      console.error(error);
    }
  };

  return (
    <div >
    <div className="relative max-w-sm bg-white rounded-md flex flex-col justify-between h-full hover:shadow-xl shadow-gray-500 duration-400 transition-all">
  <img src={image} alt=""  onClick={handleReadMore} className="rounded-t-md cursor-pointer"/>
  <span onClick={handleAddToCart} className={`absolute left-2 top-1 cursor-pointer`}>{
    isAdded ? <IoStar size={35} className="text-yellow-400 absolute top-0 left-0" />
    : <IoStarOutline size={35} className="text-black absolute top-0 left-0" />
    }</span>
  <div className="flex-1 p-3">
    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
    <p className="text-gray-700">{post.body}</p>
  </div>

  <div className="flex gap-2 p-3 rounded-b-xl mt-auto">
        <button onClick={handleEdit} className="relative w-full text-center py-2 px-4 rounded-lg bg-sky-600/30 text-sky-600 font-semibold hover:bg-sky-600/40 transition-colors cursor-pointer"><span className="absolute left-10 top-3">{<MdOutlineEdit />}</span>Edit</button>
        <button onClick={handleDelete} className="relative w-full text-center py-2 px-4 rounded-lg bg-red-500/20 text-red-500 font-semibold hover:bg-red-500/30 transition-colors cursor-pointer"><span className="absolute left-8 top-3">{<RiDeleteBin6Line />}</span>Delete</button>
  </div>
</div>
    </div>
  );
};

export default Card;
