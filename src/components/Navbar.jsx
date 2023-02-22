import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  const [menu, setMenu] = useState();
  const [toggle, settoggle] = useState();
  const [close, setClose] = useState("hidden");
  const menuHandler = () => {
    setMenu("menu-active mt-4 items-center");
    settoggle("hidden");
    setClose("block");
  };
  const closeHandler = () => {
    setMenu();
    setClose("hidden");
    settoggle("block");
  };

  return (
    <div className="px-6 py-4 shadow-sm">
      <div className="container relative items-center justify-between m-auto md:flex">
        <div className="text-3xl font-black text-indigo-800 logo">eShop</div>
        <div className="flex items-search">
          <input
            type="text"
            className="border-b-2 focus:border-indigo-500 rounded-0 outline-none w-[540px] py-2 text-lg max-md:w-[100%]"
            placeholder="Search"
          />
          <button>
            <IoIosSearch className="w-6 h-6 text-indigo-600 ml-[-25px] hover:text-indigo-800" />
          </button>
        </div>
        <IoIosMenu
          className={`absolute right-0 w-8 h-8 md:hidden top-1 ${toggle}`}
          onClick={menuHandler}
        />
        <IoIosClose
          className={`absolute right-0 w-8 h-8 md:hidden top-1 ${close}`}
          onClick={closeHandler}
        />
        <div className={`flex menu max-md:hidden ${menu}`}>
          <Link to="/" className="menu__list">
            Home
          </Link>
          <Link to="/products" className="menu__list">
            Products
          </Link>
          <Link to="/sign" className="menu__list">
            Sign in
          </Link>
          <Link to="/register" className="menu__list">
            Register
          </Link>
          <span className="relative menu__list">
            <CiShoppingCart className="w-8 h-8" />
            <strong className="absolute h-5 w-5 text-[12px] text-white bg-indigo-900 rounded-[100%] leading-[1.2rem] text-center top-[-5px] right-3">
              {2}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
