import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "best.jpg",
  "best2.jpg",
  "best3.jpg",
  "pack.jpg",
  "best5.jpg",
  "best6.jpg",
];

const LifestyleGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true, // prevent flicker or re-run after refresh
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-[#fdfbf7] py-20 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-light text-[#3e2f1c]">
            Life at Bageljoon
          </h2>
          <p className="text-[#6b5f50] mt-3 text-lg">
            Fresh mornings, coastal vibes, and crafted wellness.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-sm"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // alternate directions
              data-aos-delay={100 * (i + 1)} // staggered entry
            >
              <img
                src={src}
                alt={`Bageljoon lifestyle ${i + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"></div>
            </div>
          ))}
        </div>

        {/* Instagram Button */}
        <div
          className="mt-10"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#6b4e2f] text-white px-10 py-3 rounded-full hover:opacity-90 transition"
          >
             Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;