import React, { useState } from "react";
import {
  BoltIcon,
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className=" flex items-center justify-between relative">
        {/* logo */}
        <Link to="/" className=" flex items-center gap-2">
          <BoltIcon className="w-6 h-6 text-blue-500  " />
          <span className="text-xl font-bold tracking-wide text-gray-800">
            nextPage
          </span>
        </Link>
        {/* nav links */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "font-medium"
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "font-medium"
            }
          >
            About Us
          </NavLink>
        </div>

        {/* Mobile menu for small  device */}
        <span className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </span>
        {/* menu links */}
        {isMenuOpen && (
          <div className="lg:hidden  absolute right-0 text-left top-[3.75rem] pl-8 pr-12 py-3 bg-white shadow-md">
            <div className="flex flex-col gap-3 text-left">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : "font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/books"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : "font-medium"
                }
              >
                Books
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : "font-medium"
                }
              >
                About Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
