import React from "react";
import logo from "../assets/logo.svg";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  // const redirect = useNavigate()

  return (
    <div className=" relative">
      <div className="flex justify-between bg-[#006598] px-[5rem] absolute w-[57rem]">
        <div className="mt-[1rem]">
          <img src={logo} alt="" className="w-[8rem]" />
        </div>

        <div className="flex ">
          <ul className="flex items-center gap-7 text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>

      <div className=" flex absolute  mt-[0.75rem]  gap-4 left-[60rem]">
        <button class="bg-[#f88b0b] text-white font-bold px-10 py-3 rounded">
          Log In
        </button>

        <Link to="/auth/sign-up">
          <button class="bg-[#f88b0b]  text-white font-bold px-10 py-3 rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
