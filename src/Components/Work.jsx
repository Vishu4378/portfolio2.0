import React from "react";
import WorkData from "./WorkData";
export default function Work() {
  return (
    <>
      <div className=" px-8 sm:px-32 md:block">
        {WorkData.map((item) => {
          return (
            <div className="lg:flex my-10 ">
              <div className="max-w-md ">
                <a href={item.link} target="_blank">
                  <img
                    className="rounded-lg w-full object-contain"
                    src={item.img}
                    alt="website icon"
                  />
                </a>
              </div>
              <div className=" sm:ml-4 sm:flex sm:flex-col sm:justify-between">
                <h3 className="mt-4 text-2xl font-bold ">{item.title}</h3>
                <div className="flex mt-4 sm:space-x-6 space-x-3 flex-wrap">
                  <div className="bg-[#FF4FA7] text-xs sm:text-sm rounded-2xl pt-1 sm:pt-0.5 px-3">
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      {item.time}
                    </p>
                  </div>

                  <p className="text-lg text-gray-400 ">{item.type}</p>
                  <div className="bg-[#6dcfef] rounded-2xl  px-3">
                    <a
                      className="text-white text-xs font-semibold"
                      href={item.link}
                      target="_blank"
                    >
                      Check it Out
                    </a>
                  </div>
                </div>
                <p className="pb-4 mt-6 text-lg border-b border-black border-solid">
                  {item.Discription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
