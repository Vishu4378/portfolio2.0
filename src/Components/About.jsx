import React from "react";

export default function About() {
  return (
    <>
      <div className="sm:flex sm:flex-row-reverse sm:px-32" id="about">
        <div className="p-6 mt-8 sm:shrink-0">
          <img
            className="object-cover w-40 h-40 mx-auto rounded-full "
            src="https://cdn.discordapp.com/attachments/1020891798559789078/1020892777896214588/IMG_20220918_083311.jpg"
            alt=""
          />
        </div>
        <div className="p-6 text-center mt-11">
          <h1 className="text-4xl font-bold">Hi, I am Vijay, Web Developer</h1>
          <p className="mt-5 text-lg font-normal">
            I am Web Developer. It's been 1 years, I’m learing web development.I
            have developed many website projects and also provided my services
            to college students by getting their projects ready ASAP . I have
            been part of some very good web design projects. Currently I am
            pursuing BCA(Bachelor Of Computer Application) from DBUU.
          </p>
          <a
            className="inline-block px-5 py-2 text-lg font-semibold text-white bg-[#FF69B4] rounded-md hover:bg-[#FF4FA7] mt-7"
            href="/Vijay pandey.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
