import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lite py-8">
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
          <p>Email: info@campersshop.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Campers Way, Outdoor City</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className=" hover:text-primary">
              <FaFacebook size={24} />
            </a>
            <a href="#" className=" hover:text-primary">
              <FaTwitter size={24} />
            </a>
            <a href="#" className=" hover:text-primary">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-base">
          &copy; {new Date().getFullYear()} Campers Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
