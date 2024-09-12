import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleSidebarItemClick = (itemName) => {
    console.log(`Clicked ${itemName}`);
    // You can implement specific actions based on the clicked item here
  };

  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Horizon
          <span className="font-bold">Games</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 text-bold">
            Horizon
          </p>
          <p className="p-2 text-bold">Games</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <Link to="/cart" className="bg-black text-white hidden md:flex items-center py-2 rounded-full w-24 justify-center">
        <BsFillCartFill size={20} /> Cart
      </Link>

      {sideNav && (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Horizon <span className="text-black font-bold">Games</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <Link
              to="/"
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => handleSidebarItemClick("My Account")}
            >
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full" />
              Home
            </Link>
            <Link
              to="/myaccount"
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => handleSidebarItemClick("My Account")}
            >
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full" />
              My Account
            </Link>
           
            <Link
              to="/myfavourites"
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => handleSidebarItemClick("My Account")}
            >
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full" />
              My Favourites
            </Link>
            <li
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => handleSidebarItemClick("My Wallet")}
            >
              <FaGoogleWallet size={25} className="mr-4 text-white bg-black rounded-full" />
              My Wallet
            </li>
            <Link
              to="/help"
              className="text-xl py-4 flex cursor-pointer"
              onClick={() => handleSidebarItemClick("My Account")}
            >
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full" />
             Help
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
