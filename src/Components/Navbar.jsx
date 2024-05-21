import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";
 // Ensure correct import of icons
import logo from "../assets/dev_logo3.png"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-20" /> {/* Optional: Add height/width to image */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter /> {/* Ensure correct icon is used */}
        <FaInstagram />
        < FaSquareFacebook />
      </div>
    </nav>
  );
};

export default Navbar;
