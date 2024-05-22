import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";
import logo from "../assets/dev_logo3.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-20" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/junior-uboh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-black hover:text-gray-700 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FaSquareFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
