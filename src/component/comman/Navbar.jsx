import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Shops", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#7B5A3A]/95 backdrop-blur-xl shadow-lg"
          : "bg-[#7B5A3A]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 select-none group transition-all duration-300"
        >
          <img
    src="logo2.jpg"
    alt="Bageljoon Logo"
    className="h-12 w-12 object-cover rounded-full border border-[#E2B857]/70 shadow-[0_0_15px_rgba(226,184,87,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(226,184,87,0.4)]"
  />

  {/* Brand Name with gradient + subtle glow */}
  <span
    className="hidden sm:block text-lg md:text-2xl font-bold tracking-wider transition-all duration-500
      bg-clip-text text-transparent bg-linear-to-r from-[#E2B857] via-[#F5EBDD] to-[#E2B857]
      drop-shadow-[0_0_8px_rgba(226,184,87,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(226,184,87,0.6)]"
    style={{ fontFamily: "Cinzel, serif" }}
  >
    BagelJoon
  </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-[#F5EBDD] font-medium tracking-wide">
          {menuItems.map((item) => {
            const isActive =
              location.pathname ===
              (item === "Home" ? "/" : `/${item.toLowerCase()}`);
            return (
              <li key={item} className="relative group">
                <Link
                  to={isActive ? "#" : `/${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#B8C1A3]" : "hover:text-[#B8C1A3]"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-[#B8C1A3] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-[#F5EBDD]/70 text-[#F5EBDD] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#3A2E25] transition-all duration-300 shadow-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 bg-[#B8C1A3] text-[#3A2E25] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-sm">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F5EBDD] focus:outline-none transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#7B5A3A]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-[#F5EBDD]">
          {menuItems.map((item) => {
            const isActive =
              location.pathname ===
              (item === "Home" ? "/" : `/${item.toLowerCase()}`);
            return (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#B8C1A3]" : "hover:text-[#B8C1A3]"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Buttons */}
        <div className="flex flex-col space-y-3 pt-8 w-4/5">
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-full px-5 py-2 border border-[#F5EBDD]/70 text-[#F5EBDD] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#3A2E25] transition-all duration-300 shadow-md">
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <button className="w-full px-5 py-2 bg-[#B8C1A3] text-[#3A2E25] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
