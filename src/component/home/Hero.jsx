import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiShoppingCart, FiChevronRight } from "react-icons/fi";
import { FaLeaf, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const COLORS = {
    brown: "#7B5A3A",
    cream: "#F5EBDD",
    green: "#B8C1A3",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // smooth easing
      once: true, // run only once
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4 md:px-12 py-16"
      style={{
        background: `linear-gradient(135deg, ${COLORS.cream} 0%, #f9f3ea 100%)`,
      }}
    >
      {/* 🔹 Background Blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#B8C1A3]/25 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#7B5A3A]/15 blur-[140px] rounded-full"></div>

      {/* 🔹 Hero Grid */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-15 z-10"
      >
        {/* 🔸 Left Content */}
        <div className="flex flex-col">
          <h1
            data-aos="fade-up"
            className="text-2xl md:text-5xl font-extrabold leading-tight tracking-tight"
            style={{
              color: COLORS.brown,
              fontFamily: "Gillies Gothic, system-ui, sans-serif",
            }}
          >
            Bageljoon — California sourdough bagels & specialty coffee
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-sm md:text-xl leading-relaxed max-w-xl"
            style={{ color: "#3A2E25" }}
          >
            Minimal, coastal packaging and café experience — warm walnut tones,
            cream palettes, and gentle green accents. Designed for eco-conscious
            luxury and visual storytelling.
          </p>

          {/* 🔸 CTA Buttons */}
      <div
  data-aos="zoom-in"
  data-aos-delay="400"
  className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 text-center"
>
  <Link
    to="/shop"
    className="inline-flex items-center gap-3 px-12 py-3 md:px-6 md:py-3 rounded-full shadow-md text-base font-medium transition-all duration-300 hover:-translate-y-[2px]"
    style={{
      backgroundColor: COLORS.brown,
      color: COLORS.cream,
    }}
  >
    <FiShoppingCart /> Order Samples
  </Link>

  <Link
    to="/about"
    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 text-base font-medium hover:bg-[#7B5A3A]/10"
    style={{
      borderColor: "rgba(0,0,0,0.1)",
      color: COLORS.brown,
    }}
  >
    Learn about packaging <FiChevronRight />
  </Link>
</div>


          {/* 🔸 Highlights */}
          <ul
            data-aos="fade-up"
            data-aos-delay="600"
            className="hidden md:flex mt-8 flex flex-wrap gap-3 text-sm md:text-base"
          >
            <li
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm"
              style={{
                backgroundColor: COLORS.green,
                color: COLORS.brown,
                fontWeight: 500,
              }}
            >
              <FaLeaf className="text-[#3A2E25]/80" /> Eco-conscious materials
            </li>
            <li
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm"
              style={{
                backgroundColor: COLORS.green,
                color: COLORS.brown,
                fontWeight: 500,
              }}
            >
              <FaStar className="text-[#3A2E25]/80" /> Premium matte finish
            </li>
          </ul>
        </div>

        {/* 🔸 Right Image */}
        <div
          className="flex items-center justify-center relative"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <div className="relative w-full max-w-2xl group">
            <img
              src="ha.png"
              alt="Bageljoon packaging mockup"
              className="w-full h-auto md:h-[350px] lg:h-[350px] rounded-3xl shadow-2xl object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div
              className="absolute -bottom-8 left-12 w-28 h-2 rounded-full transition-all duration-500 group-hover:w-40"
              style={{ backgroundColor: COLORS.green }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
