import React, { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
   "/fresh1.webp",
   "/coastal.jpg",
   "/crafted1..webp",
   "/fresh2.jpg",
   "/coastal.webp",
   "/crafted2..webp",
];

const LifestyleGallery = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         easing: "ease-out-cubic",
         once: true,
      });
      AOS.refresh();
   }, []);

   return (
      <section className="bg-[#fdfbf7] py-24 px-6 text-center overflow-hidden">
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
                     className="relative group overflow-hidden rounded-2xl shadow-md"
                     data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                     data-aos-delay={100 * (i + 1)}
                  >
                     <img
                        src={src}
                        alt={`Bageljoon lifestyle ${i + 1}`}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                     />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"></div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default LifestyleGallery;
