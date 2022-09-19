import React from "react";

export default function Post() {
  return (
    <div>
      <div className="p-3 bg-sky-100 pb-7 sm:px-32 " id="post">
        <div className="sm:flex sm:justify-between">
          <h3 className="py-6 text-lg font-medium text-center sm:text-left">
            Recent posts
          </h3>
          <a className="hidden sm:self-center sm:block" href="#">
            View all
          </a>
        </div>
        <div className="sm:flex sm:space-x-5 ">
          <div className="p-4 bg-white rounded-md">
            <h2 className="text-2xl font-bold">A successful website..</h2>
            <div className="flex mt-3 text-lg font-normal bg">
              <h4>12 Feb 2022</h4>{" "}
              <svg
                className="ml-3 mr-3"
                width="2"
                height="21"
                viewBox="0 0 2 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V21" stroke="black" />
              </svg>
              <h4>Mohamed Saad</h4>
            </div>
            <p className="mt-4 text-lg font-normal ">
              “A successful website does three things: It attracts the right
              kinds of visitors. Guides them to the main services or product you
              offer. Collect Contact details for future ongoing relation.”
            </p>
          </div>

          <div className="p-4 mt-4 bg-white rounded-md sm:mt-0">
            <h2 className="text-2xl font-bold">What we need to get Success</h2>
            <div className="flex mt-3 text-lg font-normal bg">
              <h4>7 Aug 2018</h4>{" "}
              <svg
                className="ml-3 mr-3"
                width="2"
                height="21"
                viewBox="0 0 2 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0V21" stroke="black" />
              </svg>
              <h4>Madison Alcedo</h4>
            </div>
            <p className="mt-4 text-lg font-normal ">
              “Everyone needs a little push sometimes. Whether you're starting
              out on a new career path or need a burst of motivation, these
              inspiring words will remind you that success is possible.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
