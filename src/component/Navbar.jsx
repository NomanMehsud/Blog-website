import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100 flex  items-center justify-between py-3 px-5 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <svg
          className="h-6 w-6 text-primary text-blue-700"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
        <h2 className="text-xl font-bold">Tech Insights</h2>
      </div>
      <div className="flex items-center">
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to={'/'} className="transition-colors hover:text-sky-600">
            Home
          </Link>
          <a className="transition-colors hover:text-sky-600" href="#">
            Articles
          </a>
          <a className="transition-colors hover:text-sky-600" href="#">
            About
          </a>
          <a className="transition-colors hover:text-sky-600" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Link to={'/cart'} className="rounded-lg bg-sky-600/10 px-4 py-2 text-sm font-bold text-sky-600 transition-colors hover:bg-sky-600/20">
            Favorite Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
