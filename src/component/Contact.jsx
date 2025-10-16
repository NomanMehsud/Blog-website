import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full pt-5 bg-gray-100 mt-5">
      <div className="max-w-6xl mx-[12%] ">
        <div>
          <h2 className="text-3xl mt-1 text-center md:text-4xl font-bold ">
            Get In<span className="text-[#00abf0]"> Touch</span>
          </h2>
          <p className=" text-center text-[12px] mt-1">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 mt-8 gap-4">
          {/* contact information */}
          <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4  flex items-center gap-2">
              <p className="w-9 h-12 bg-blue-600 text-white flex items-center justify-center rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </p>
              Contact Information
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {/* phone */}
              <div className="border-1 border-gray-300 rounded-md p-3 flex items-center gap-3">
                <p className="w-9 h-12 bg-sky-400 flex items-center justify-center rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </p>
                <div className=" text-[13px] flex flex-col gap-[3px]">
                  <p className=" font-semibold">Phone</p>
                  <p className="">+92 347 9517310</p>
                </div>
              </div>

              {/* email */}

              <div className="border-1 border-gray-300 rounded-md p-3 flex items-center gap-3">
                <p className="w-9 h-12 bg-blue-500 flex items-center justify-center rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </p>
                <div className=" text-[13px] flex flex-col gap-[3px]">
                  <p className=" font-semibold">Email</p>
                  <p className="">nomanmehsud2244@gmail.com</p>
                </div>
              </div>

              {/* location */}

              <div className="border-1 border-gray-300 rounded-md p-3 flex items-center gap-3">
                <p className="w-9 h-12 bg-purple-500 flex items-center justify-center rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </p>
                <div className=" text-[13px] flex flex-col gap-[3px]">
                  <p className=" font-semibold">Location</p>
                  <p className="">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t-1 border-gray-300">
              <div className="mt-8">
                <p className=" font-semibold text-[14px]">Contact with me</p>
                <div className="flex gap-3 mt-4">
                  {/* Instagram */}
                  <div
                    className="w-9 h-12 flex items-center justify-center rounded-md
      bg-white text-[#1193d4] border border-gray-300 
     hover:bg-[#1193d4] hover:text-white transition-all duration-300 
     shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Instagram size={18} />
                  </div>
                  {/* GitHub */}
                  <div
                    className="w-9 h-12 flex items-center justify-center rounded-md
      bg-white text-[#1193d4] border border-gray-300 
     hover:bg-[#1193d4] hover:text-white transition-all duration-300 
     shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Github size={18} />
                  </div>
                  {/* LinkedIn */}
                  <div
                    className="w-9 h-12 flex items-center justify-center rounded-md
      bg-white text-[#1193d4] border border-gray-300 
     hover:bg-[#1193d4] hover:text-white transition-all duration-300 
     shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Linkedin size={18} />
                  </div>
                  {/* Twitter */}
                  <div
                    className="w-9 h-12 flex items-center justify-center rounded-md
      bg-white text-[#1193d4] border border-gray-300 
     hover:bg-[#1193d4] hover:text-white transition-all duration-300 
     shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Twitter size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* send me a message */}
          <div className="w-full max-w-lg p-8 border border-gray-200 bg-white  rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4  flex items-center gap-2">
              <p className="w-9 h-12 bg-blue-600 flex items-center justify-center rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f8f7f7"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send-icon lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </p>
              Send Me a Message
            </h3>
            {/* inputs */}
            <form action="">
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col text-[13px] gap-2">
                  <label className="font-semibold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-4 font-semibold border-1 border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col text-[13px] gap-2">
                  <label className=" font-semibold">Your Email</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    className="p-4  font-semibold border-1 border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col text-[13px] gap-2">
                  <label className=" font-semibold">Your Message</label>
                  <textarea
                    cols="5"
                    rows="7"
                    name="message"
                    placeholder="Enter your message"
                    className="p-4 font-semibold border-1 border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>
              </div>

              <div className=" mt-5">
                <button
                  type="submit"
                  className="w-full relative overflow-hidden px-6 py-3 rounded-lg 
               cursor-pointer border-2 border-gray-300 text-[#00abf0] font-semibold
               transition-colors duration-300
               before:content-[''] before:absolute before:top-0 before:left-0 
               before:w-full before:h-full before:bg-[#00abf0] 
               before:scale-x-0 before:origin-left
               before:transition-transform before:duration-500
               hover:before:scale-x-100 hover:text-[#081b29]"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
