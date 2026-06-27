import React from "react";
import logo from "../../src/logo/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-travel-bg border-t border-travel-accent/20">
      <div className=" w-full px-6 lg:px-20 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <section className="">
              <Link to="/" className="flex gap-2 items-center">
                <img className="h-4 md:h-6 lg:h-8" src={logo} alt="" />
                <h1 className="font-['Playfair_Display'] text-travel-accent text-2xl md:text-3xl lg:text-3xl font-bold">
                  ROAM
                </h1>
              </Link>
            </section>

            <p className="text-travel-muted leading-relaxed">
              Discover breathtaking destinations, share travel experiences, and
              explore the world with confidence through ROAM.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-travel-text text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4 text-travel-muted">
              <NavLink to="/" className="hover:text-travel-accent transition">
                Home
              </NavLink>

              <li>
                <NavLink
                  to="/all_spot"
                  className="hover:text-travel-accent transition"
                >
                  All Tourist Spots
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/add_spot"
                  className="hover:text-travel-accent transition"
                >
                  Add Tourist Spot
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/my_list"
                  className="hover:text-travel-accent transition"
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-travel-text text-2xl font-semibold mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-travel-muted">
              <li className="flex items-center gap-2">
                <IoMdMail /> <p>abc@gmail.com</p>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot /> <p>Dhaka, Bangladesh</p>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>+880 1234-567890</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-travel-text text-2xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex flex-col gap-4 text-travel-muted">
              <a
                href="#"
                className="hover:text-travel-accent transition flex gap-2 items-center"
              >
                <FaFacebook />
                <p>Facebook</p>
              </a>

              <a
                href="#"
                className="hover:text-travel-accent transition flex gap-2 items-center"
              >
                <FaSquareInstagram />
                <p>Instagram</p>
              </a>

              <a
                href="#"
                className="hover:text-travel-accent transition flex gap-2 items-center"
              >
                <FaXTwitter />
                <p>( X /Twitter )</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-travel-accent/20 mt-12 pt-6 text-center text-travel-muted">
          © {new Date().getFullYear()} ROAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
