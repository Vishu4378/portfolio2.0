import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div className="relative text-gray-600 body-font" id="contact">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Let's talk
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Want Us To Contact You
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label for="name" className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    for="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    for="message"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-[#f057a4] border-0 rounded focus:outline-none hover:bg-[#FF69B4]">
                  Submit
                </button>
              </div>
              <div className="w-full p-2 pt-8 mt-8 text-center border-t text-xs sm:text-base border-gray-200">
                <a
                  target="_blank"
                  href="https://www.vpandey4378@gmail.com"
                  className="text-indigo-500"
                >
                  vpandey4378@gmail.com
                </a>

                <p className="leading-normal">
                  Dehradun
                  <p>Uttarakhand</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
