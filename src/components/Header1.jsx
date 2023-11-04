import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
// import Register from "../Pages/Register";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Products",
    path: "/product",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
  },
];
const Header1 = () => {
  return (
    <div>
      <div className="flex h-[5rem] bg-blue-800 items-center justify-between ">
        <div className="flex w-[65%] bg-blue-800 w-18 h-[5rem] items-center">
          <div className="ml-10 ">
            <img src={Logo} alt="logo" height="100" width="150" />
          </div>
          <div className="ml-56">
            <ul className="flex flex-row gap-5">
              {navLinks.map((links) => (
                <Link to={navLinks.path}>
                  <li className="text-white font-bold" key={links.id}>
                    {links.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-5 w-[35%] bg-white w-18 h-[5rem]">
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
    </div>
  );
};

export default Header1;
