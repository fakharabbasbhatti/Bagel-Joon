import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sustainability = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         easing: "ease-in-out",
         once: true,
         offset: 100,
      });
      AOS.refresh();
   }, []);

   return (
      <section className="bg-[#f8f4ee] py-24 px-6 overflow-hidden">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
            {/* Image side */}
            <div
               className="relative flex items-center justify-center overflow-hidden rounded-3xl"
               data-aos="fade-right"
               data-aos-delay="100"
            >
               <div className="relative w-full">
                  <img
                     src="/asd.webp"
                     alt="Bageljoon Packaging"
                     className="rounded-3xl shadow-[0_5px_25px_rgba(0,0,0,0.15)] w-full h-auto object-cover max-h-[500px] transition-transform duration-700 ease-out hover:scale-105"
                  />
                  {/* Floating Badge */}
                  <div
                     className="absolute bottom-4 right-4 bg-[#6b4e2f] text-white px-6 py-3 rounded-2xl text-sm shadow-md backdrop-blur-sm bg-opacity-90 hover:bg-[#5a3f25] transition-all duration-300"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                  >
                     Eco-Friendly Design 🌱
                  </div>
               </div>
            </div>

            {/* Text side */}
            <div
               className="flex flex-col justify-center overflow-hidden"
               data-aos="fade-left"
               data-aos-delay="200"
            >
               <h2 className="text-4xl md:text-5xl font-light text-[#3e2f1c] leading-snug tracking-wide">
                  Sustainable Packaging, <br /> Elevated Aesthetic.
               </h2>

               <p
                  className="text-[#6b5f50] text-lg mt-6 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  Every detail of our packaging is designed to reflect our
                  California roots — clean, natural, and thoughtful. From
                  recyclable bagel boxes to compostable coffee cups, Bageljoon
                  blends modern minimalism with sustainability for a premium yet
                  planet-friendly experience.
               </p>

               {/* Features */}
               <div
                  className="flex flex-wrap gap-4 mt-8"
                  data-aos="fade-up"
                  data-aos-delay="500"
               >
                  {[
                     "♻️ 100% Recyclable Materials",
                     "🌾 Natural Textures",
                     "☕ Premium Feel",
                  ].map((feature, i) => (
                     <div
                        key={i}
                        className="bg-white rounded-xl px-5 py-3 text-[#3e2f1c] text-sm font-medium shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105"
                     >
                        {feature}
                     </div>
                  ))}
               </div>

               {/* Decorative underline */}
               <span className="block w-0 h-[2px] bg-[#6b4e2f] mt-6 transition-all duration-700 group-hover:w-24"></span>
            </div>
         </div>
      </section>
   );
};

export default Sustainability;
