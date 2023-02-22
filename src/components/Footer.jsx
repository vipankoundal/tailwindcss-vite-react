import React from "react";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-20 text-white grid grid-cols-4 gap-6">
      <div>
        <h2 className="font-bold">Get in Touch</h2>
        <p className="py-4">
          Don’t miss any updates of our new templates and extensions.!
        </p>
        <input
          type="text"
          className="py-1 px-2 rounded-full text-black focus:outline-none"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div>
        <h2 className="font-bold">Information</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold">Help</h2>
        <ul>
          <li>
            <Link to="/tnc">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/sign">Sign in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>

      <div className="">
        <h2 className="font-bold">Contact Us</h2>
        <p className="py-4">Contact us if need help withanything</p>
        <ul className="flex gap-4">
          <li>
            <a href="">
              <IoLogoFacebook className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoInstagram className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoLinkedin className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
