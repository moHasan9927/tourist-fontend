import React, { useState } from "react";
import logo from "../../src/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  //   const handleShow = () => {};
  return (
    <div className="flex justify-between items-center bg-travel-surface p-3 md:p-4 lg:p-5 lg:bg-yellow-500 md:bg-green-700 relative">
      <section className="">
        <Link to="/" className="flex gap-2 items-center">
          <img className="h-7 md:h-8 lg:h-10" src={logo} alt="" />
          <h1 className="font-['Playfair_Display'] text-travel-accent text-2xl md:text-3xl lg:text-4xl font-bold">
            ROAM
          </h1>
        </Link>
      </section>
      <section className="gap-8 items-center hidden md:hidden lg:flex xl:flex">
        <NavLink to="/">Home</NavLink>
        <p>All Tourist Spots</p>
        <p>Register</p>
        <p>Add Tourist Spot</p>
        <p>My List</p>
      </section>
      <section className="flex gap-1 lg:gap-3 items-center">
        <div>☀️</div>
        <div className="hidden lg:flex gap-3 items-center ">
          <CgProfile />
          <NavLink to="/login">Login</NavLink>
        </div>
        <div onClick={() => setShowNav(!showNav)} className="lg:hidden">
          <TiThMenu />
        </div>
      </section>
      {showNav && (
        <section className="h-screen absolute inset-0 backdrop-blur-3xl bg-luxury-bg flex justify-between p-6 lg:hidden xl:hidden">
          <div className="flex flex-col text-white">
            <NavLink className="py-3 border-b border-b-white" to="/">
              Home
            </NavLink>
            <NavLink className="py-3 border-b border-b-white">
              All Tourist Spots
            </NavLink>
            <NavLink className="py-3 border-b border-b-white">Register</NavLink>
            <NavLink className="py-3 border-b border-b-white">
              Add Tourist Spot
            </NavLink>
            <NavLink className="py-3 border-b border-b-white">My List</NavLink>
          </div>
          <div className="">
            <div
              onClick={() => setShowNav(!showNav)}
              className="bg-white text-black p-2 rounded-full"
            >
              <RxCross1 />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NavBar;
