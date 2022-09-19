import React, { useState } from "react";

const navLinks = [
  {
    label: "Home",
    link: "#about",
  },
  {
    label: "Work",
    link: "#work",
  },
  {
    label: "Post",
    link: "#post",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="sticky top-0 flex items-center justify-end h-12 p-6 ">
        <div className="hidden sm:flex sm:space-x-8">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className={[
                "  py-1 px-2 font-semibold text-sm rounded-xl",
                active === index ? "bg-[#FF4FA7] text-white" : "",
              ].join(" ")}
              onClick={() => {
                setActive(index);
              }}
              href={item.link}
            >
              {item.label}
            </a>
          ))}
        </div>

        <svg
          className="sm:hidden"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H30" stroke="#21243D" stroke-width="1.6" />
          <path d="M0 10H30" stroke="#21243D" stroke-width="1.6" />
          <path d="M0 19H30" stroke="#21243D" stroke-width="1.6" />
        </svg>
      </div>
    </>
  );
}
