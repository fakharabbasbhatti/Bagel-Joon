import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: true, // animation runs once, data won't disappear on refresh
      easing: "ease-out-cubic",
    });
    AOS.refresh(); // ensures visibility after refresh
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center py-45 px-6"
      style={{ backgroundImage: "url('image2.jpg')" }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center"
        data-aos=""
      >
        <h1
          className="text-2xl md:text-5xl font-light text-[white] leading-tight"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          California-Style Sourdough Bagels <br className="hidden md:block" /> &
          Specialty Coffee
        </h1>

        <p
          className="text-[white] text-lg mt-4 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Where modern minimalism meets coastal warmth and everyday wellness.
        </p>

        <div className="flex gap-4 mt-8" data-aos="zoom-in" data-aos-delay="600">
          <Link to="/contact">
            <button className="bg-[#6b4e2f] text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Order Now
            </button>
          </Link>
          <button className="border border-[#6b4e2f] text-[white] px-8 py-3 rounded-full hover:bg-[#6b4e2f] duration-100 transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;