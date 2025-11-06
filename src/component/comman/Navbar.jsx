import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const location = useLocation();

   const toggleMenu = () => setOpen(!open);

   // Close mobile menu when route changes
   useEffect(() => {
      setOpen(false);
   }, [location]);

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const menuItems = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Shops", path: "/shops" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
   ];

   const isActive = (path) => {
      if (path === "/") {
         return location.pathname === "/";
      }
      return location.pathname.startsWith(path);
   };

   return (
      <nav
         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled
               ? "bg-[#7B5A3A]/95 backdrop-blur-xl shadow-lg"
               : "bg-[#7B5A3A]/80 backdrop-blur-md"
         }`}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
               to="/"
               className="flex items-center space-x-2 select-none group transition-all duration-300"
            >
               <img
                  src="logo2.jpg"
                  alt="Bageljoon Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full border border-[#E2B857]/70 shadow-[0_0_15px_rgba(226,184,87,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(226,184,87,0.4)]"
               />

               {/* Brand Name - Show on tablet and desktop */}
               <span
                  className="hidden sm:block text-lg md:text-2xl font-bold tracking-wider transition-all duration-500
      bg-clip-text text-transparent bg-gradient-to-r from-[#E2B857] via-[#F5EBDD] to-[#E2B857]
      drop-shadow-[0_0_8px_rgba(226,184,87,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(226,184,87,0.6)]"
                  style={{ fontFamily: "Cinzel, serif" }}
               >
                  BagelJoon
               </span>
            </Link>

            {/* Desktop Menu - Show on lg screens and above */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-[#F5EBDD] font-medium tracking-wide">
               {menuItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                     <li key={item.name} className="relative group">
                        <Link
                           to={item.path}
                           className={`transition-colors duration-300 text-sm xl:text-base ${
                              active ? "text-[#B8C1A3]" : "hover:text-[#B8C1A3]"
                           }`}
                        >
                           {item.name}
                           <span
                              className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-[#B8C1A3] transition-all duration-300 ${
                                 active ? "w-full" : "w-0 group-hover:w-full"
                              }`}
                           ></span>
                        </Link>
                     </li>
                  );
               })}
            </ul>

            {/* Tablet Menu - Show on md screens, hide on lg - NOW SHOWS ALL 5 ITEMS */}
            <ul className="hidden md:flex lg:hidden space-x-3 text-[#F5EBDD] font-medium">
               {menuItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                     <li key={item.name} className="relative group">
                        <Link
                           to={item.path}
                           className={`transition-colors duration-300 text-xs ${
                              active ? "text-[#B8C1A3]" : "hover:text-[#B8C1A3]"
                           }`}
                        >
                           {item.name}
                           <span
                              className={`absolute left-0 -bottom-1 h-[1px] rounded-full bg-[#B8C1A3] transition-all duration-300 ${
                                 active ? "w-full" : "w-0 group-hover:w-full"
                              }`}
                           ></span>
                        </Link>
                     </li>
                  );
               })}
            </ul>

            {/* Desktop Buttons - Show on lg screens and above */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
               <Link to="/login">
                  <button className="px-4 py-2 xl:px-5 xl:py-2 border border-[#F5EBDD]/70 text-[#F5EBDD] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#3A2E25] transition-all duration-300 shadow-sm text-sm xl:text-base">
                     Login
                  </button>
               </Link>
               <Link to="/signup">
                  <button className="px-4 py-2 xl:px-5 xl:py-2 bg-[#B8C1A3] text-[#3A2E25] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-sm text-sm xl:text-base">
                     Sign Up
                  </button>
               </Link>
            </div>

            {/* Tablet Buttons - Show on md screens, hide on lg */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
               <Link to="/login">
                  <button className="px-2 py-1 border border-[#F5EBDD]/70 text-[#F5EBDD] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#3A2E25] transition-all duration-300 shadow-sm text-xs">
                     Login
                  </button>
               </Link>
               <Link to="/signup">
                  <button className="px-2 py-1 bg-[#B8C1A3] text-[#3A2E25] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-sm text-xs">
                     Sign Up
                  </button>
               </Link>
            </div>

            {/* Mobile Menu Toggle - Show on small screens */}
            <button
               className="md:hidden text-[#F5EBDD] focus:outline-none transition-transform duration-300 p-2"
               onClick={toggleMenu}
               aria-label="Toggle menu"
            >
               {open ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Mobile Menu */}
         <div
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#7B5A3A]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
               open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
            }`}
         >
            {/* Close button for mobile */}
            <button
               className="absolute top-6 right-6 text-[#F5EBDD] p-2"
               onClick={toggleMenu}
               aria-label="Close menu"
            >
               <X size={28} />
            </button>

            <ul className="flex flex-col items-center space-y-8 text-xl font-medium text-[#F5EBDD]">
               {menuItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                     <li key={item.name}>
                        <Link
                           to={item.path}
                           onClick={toggleMenu}
                           className={`transition-colors duration-300 text-2xl ${
                              active
                                 ? "text-[#B8C1A3] font-bold"
                                 : "hover:text-[#B8C1A3]"
                           }`}
                        >
                           {item.name}
                        </Link>
                     </li>
                  );
               })}
            </ul>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-4 pt-8 w-4/5 max-w-xs">
               <Link to="/login" onClick={toggleMenu}>
                  <button className="w-full px-6 py-3 border-2 border-[#F5EBDD]/70 text-[#F5EBDD] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#3A2E25] transition-all duration-300 shadow-lg text-lg">
                     Login
                  </button>
               </Link>
               <Link to="/signup" onClick={toggleMenu}>
                  <button className="w-full px-6 py-3 bg-[#B8C1A3] text-[#3A2E25] rounded-full font-semibold hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-lg text-lg">
                     Sign Up
                  </button>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
