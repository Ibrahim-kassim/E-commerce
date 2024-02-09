import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Shop");

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="relative ">
      <div className=" flex flex-row items-center justify-between px-4 py-4 md:px-12 md:h-24 border-b-2 shadow-md">
        <div className="flex items-center justify-center gap-4">
          <img src={Logo} alt="" className="" />
          <h1 className="text-2xl">Shopper</h1>
        </div>

        <div
          className="lg:hidden cursor-pointer px-2 py-2 hover:bg-orange-300 duration-300 ease-in-out rounded-full border-2"
          onClick={handleToggleMenu}
        >
          <RxHamburgerMenu size={20} />
        </div>

        <ul className={`lg:flex gap-8 hidden ${openMenu ? "flex" : ""}`}>
          <Link
            to={"/"}
            onClick={() => handleMenuItemClick("Shop")}
            className={`cursor-pointer ${
              selectedItem === "Shop" ? "font-bold" : ""
            }`}
          >
            Shop {selectedItem === "Shop" && <hr className="hre" />}
          </Link>
          <Link
            to={"/mens"}
            onClick={() => handleMenuItemClick("Men")}
            className={`cursor-pointer ${
              selectedItem === "Men" ? "font-bold" : ""
            }`}
          >
            Men {selectedItem === "Men" && <hr className="hre" />}
          </Link>
          <Link
            to={"/womens"}
            onClick={() => handleMenuItemClick("Women")}
            className={`cursor-pointer ${
              selectedItem === "Women" ? "font-bold" : ""
            }`}
          >
            Women {selectedItem === "Women" && <hr className="hre" />}
          </Link>
          <Link
            to={"/kids"}
            onClick={() => handleMenuItemClick("Kids")}
            className={`cursor-pointer ${
              selectedItem === "Kids" ? "font-bold" : ""
            }`}
          >
            Kids {selectedItem === "Kids" && <hr className="hre" />}
          </Link>
        </ul>

        <div className="lg:flex items-center justify-center px-8 gap-4 hidden">
          <Link to={"/login"}>
            <button className="px-4 py-2 rounded-full border hover:bg-[#C25A37] hover:text-white cursor-pointer duration-300 ease-in-out transition">
              Login
            </button>
          </Link>

          <Link to={"/cart"}>
            <FaCartShopping />
          </Link>
        </div>
      </div>

      {openMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center">
          <IoMdClose
            onClick={handleToggleMenu}
            className="absolute top-8 right-8  hover:text-white ease-out duration-300 cursor-pointer z-50"
            size={40}
          />
          <div className="bg-white shadow-2xl rounded-md px-4 w-[60%] h-[70%] relative">
            <div className="w-full h-full flex flex-col items-center py-8 gap-4">
              <Link
                onClick={handleToggleMenu}
                to={"/"}
                className="rounded-full border-2 hover:text-white cursor-pointer py-4 w-full items-center justify-center flex hover:bg-orange-300 duration-300 ease-in-out"
              >
                Shop
              </Link>
              <Link
                onClick={handleToggleMenu}
                to={"/mens"}
                className="rounded-full border-2 hover:text-white cursor-pointer py-4 w-full items-center justify-center flex hover:bg-orange-300 duration-300 ease-in-out"
              >
                Men
              </Link>
              <Link
                onClick={handleToggleMenu}
                to={"/womens"}
                className="rounded-full border-2 hover:text-white cursor-pointer py-4 w-full items-center justify-center flex hover:bg-orange-300 duration-300 ease-in-out"
              >
                Women
              </Link>
              <Link
                onClick={handleToggleMenu}
                to={"/kids"}
                className="rounded-full border-2 hover:text-white cursor-pointer py-4 w-full items-center justify-center flex hover:bg-orange-300 duration-300 ease-in-out"
              >
                Kids
              </Link>
              <div className="absolute bottom-2 right-2 flex items-center gap-4">
                <Link to={"/cart"}>
                  <FaCartShopping
                    onClick={handleToggleMenu}
                    className="z-50 cursor-pointer hover:border-2 duration-300 ease-out trasnsition"
                    size={20}
                    color="orange"
                  />
                </Link>
                <Link to={"/login"}>
                  <button
                    onClick={handleToggleMenu}
                  className="px-4 py-2 rounded-full border hover:bg-[#C25A37] hover:text-white cursor-pointer duration-300 ease-in-out transition">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
