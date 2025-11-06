import React from "react";
import { motion } from "framer-motion";

const brown = "#5B3A29";
const cream = "#F5EDE2";
const green = "#7DA17A";

export default function Hero() {
  return (
    <section className="min-h-screen relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-linear-to-br from-[#fff8f3] via-[#f5ede2] to-white">
    
    
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-40 bg-[url('coffee2.png')]"></div>
      <div className="relative max-w-7xl pt-10 md:pt-20 mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
      
      
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight mb-6 text-[#1b1b1b]">
            Minimal, Coastal &{" "}
            <span className="text-[#8e6840]">Premium Packaging</span>
          </h1>
          <p className="text-[#1e1d1d] text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Discover modern California-style packaging designed for photogenic,
            eco-conscious, and premium to-go experiences — elevating your brand
            with timeless simplicity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 px-6 py-3 rounded-full text-white font-medium shadow-md bg-[#93785C] hover:bg-[#895f33] transition-all duration-300"
          >
            Explore Packaging
          </motion.button>
        </motion.div>

       
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="coffee.png"
            alt="Premium packaging mockup"
            className="w-[90%] md:w-[85%] lg:w-[80%] rounded-3xl shadow-2xl border border-[#e9e1d8] object-cover"
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
