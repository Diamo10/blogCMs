import React from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const loginButton = () => {
    navigate("/login");
  };
  const logoutButton = () => {
    logout();
    navigate("/");
  };
  const { user } = useAuth();
  return (
    <div>
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6"> */}
      <div className="font-macondo relative pt-6 sm:pb-7">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Company Name</span>
                <Logo />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 list-none">
            <li>
              <a
                href="#"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target
              >
                Contact
              </a>
            </li>
            <li>
              <Link to={"/blog"}>
                <a
                  href=""
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target="_blank"
                >
                  Blog
                </a>
              </Link>
            </li>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              {!user ? (
                <button
                  onClick={loginButton}
                  className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  Sign in
                </button>
              ) : (
                <button
                  onClick={logoutButton}
                  className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  Sign out
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
