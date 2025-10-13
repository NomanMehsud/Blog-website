import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import EditModal from "./component/EditModel";
import { ToastContainer } from "react-toastify";
import Cart from "./component/Cart";

function App() {
  return (
    <>
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        />
    <Navbar/>

        <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/editmodel/:id" element = {<EditModal/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>

    </>
  );
}

export default App;
