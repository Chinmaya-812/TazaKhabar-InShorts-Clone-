import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/sideSlice";

import "./css/sidebar.css";

const Sidebar = () => {
  const isSideBarMenu = useSelector((i) => i.side.isSidebarOpen);
  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`side-panel ${isSideBarMenu ? "open" : ""}`}>
      <div className="side-panel-content">
        <div className="flex justify-between border-b-2 border-gray-200">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWFzuG0tfeF5sNgRTESGeN01mOpwtx1NgVw&s"
            height={60}
            width={140}
            alt=""
          />
          <button onClick={toggleMenuhandler} className="h-16 border-none">
            <span className="text-4xl font-semibold transition-transform duration-500 ease-in-out transform hover:scale-125">
              X
            </span>
          </button>
        </div>
        <nav className="sidebar-nav">
          <div className="">
            <Link to={"/results?q=national"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <h2>
                  <span>India</span>
                </h2>
              </button>
            </Link>
            <Link to={"/results?q=business"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Business</span>
              </button>
            </Link>
            <Link to={"/results?q=politics"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Politics</span>
              </button>
            </Link>
            <Link to={"/results?q=sports"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Sports</span>
              </button>
            </Link>
            <Link to={"/results?q=technology"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Technology</span>
              </button>
            </Link>
            <Link to={"/results?q=startup"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Startups</span>
              </button>
            </Link>
            <Link to={"/results?q=entertainment"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Entertainment</span>
              </button>
            </Link>

            <Link to={"/results?q=hatke"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Hatke</span>
              </button>
            </Link>
            <Link to={"/results?q=world"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>International</span>
              </button>
            </Link>

            <Link to={"/results?q=automobile"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Automobile</span>
              </button>
            </Link>
            <Link to={"/results?q=science"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Science</span>
              </button>
            </Link>
            <Link to={"/results?q=travel"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Travel</span>
              </button>
            </Link>
            <Link to={"/results?q=miscellaneous"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Miscellaneous</span>
              </button>
            </Link>
            <Link to={"/results?q=fashion"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Fashion</span>
              </button>
            </Link>
            <Link to={"/results?q=education"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Education</span>
              </button>
            </Link>
            <Link to={"/results?q=Health___Fitness"}>
              <button className="mb-1 flex  p-2 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Health & Fitness</span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
