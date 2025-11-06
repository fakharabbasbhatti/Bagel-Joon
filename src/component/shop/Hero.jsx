import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
   useEffect(() => {
      AOS.init({
         duration: 1200,
         once: true,
         easing: "ease-out-cubic",
      });
      AOS.refresh();
   }, []);

   return (
      <section
         className="relative bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center py-45 px-6 min-h-screen"
         style={{
            backgroundImage:
               "linear-gradient(rgba(139, 115, 85, 0.8), rgba(139, 115, 85, 0.8)), url('shop-(1).jpg')",
         }}
      >
         {/* Overlay for depth */}
         <div className="absolute inset-0 bg-black/40"></div>

         {/* Content */}
         <div className="relative z-10 flex flex-col items-center" data-aos="">
            <h1
               className="text-3xl md:text-6xl font-light text-white leading-tight tracking-wide"
               data-aos="fade-right"
               data-aos-delay="200"
            >
               Freshly Baked. <br className="hidden md:block" /> Perfectly
               Brewed.
            </h1>

            <p
               className="text-white text-lg md:text-xl mt-5 max-w-2xl"
               data-aos="fade-up"
               data-aos-delay="400"
            >
               Indulge in handcrafted sourdough bagels and signature coffee
               blends — made daily with passion, flavor, and a touch of
               California sunshine.
            </p>

            <div
               className="flex flex-wrap justify-center gap-4 mt-10"
               data-aos="zoom-in"
               data-aos-delay="600"
            >
               <Link to="/contact">
                  <button className="bg-[#6b4e2f] text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300">
                     Order Now
                  </button>
               </Link>
               <Link to="/menu">
                  <button className="border border-[#6b4e2f] text-white px-8 py-3 rounded-full hover:bg-[#6b4e2f] hover:border-transparent transition-all duration-300">
                     View Menu
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Hero;
