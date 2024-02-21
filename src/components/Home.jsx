import React from "react";
import Hero from "../assets/DSC03393.JPG";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-500 via-gray to-white text-black "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a Frontend Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I'm currently working as a developer, I love to work on web
            application using technologies like React, Tailwind and JavaScript.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200 ">
                <FaAngleRight />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Hero}
            alt="my profile"
            className="rounded-2xl mx-auto max-w-xl  class w-1/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
