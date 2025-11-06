import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const AboutCTA = () => {
   return (
      <section className="py-20 bg-[#5D4037] text-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div data-aos="fade-right">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display']">
                     Visit Us Today
                  </h2>
                  <div className="w-20 h-1 bg-[#A8B8A5] mb-8"></div>
                  <p className="text-lg mb-8 leading-relaxed opacity-90">
                     Experience the perfect blend of California-style sourdough
                     bagels and specialty coffee in the heart of La Jolla.
                  </p>

                  <div className="space-y-4 mb-8">
                     <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-[#A8B8A5] text-xl" />
                        <span> 123 Coastal Ave, La Jolla, CA</span>
                     </div>
                     <div className="flex items-center space-x-4">
                        <FaPhone className="text-[#A8B8A5] text-xl" />
                        <span>(858) 555-0123</span>
                     </div>
                     <div className="flex items-center space-x-4">
                        <FaClock className="text-[#A8B8A5] text-xl" />
                        <span>Open Daily: 7:00 AM - 4:00 PM</span>
                     </div>
                  </div>

                  <button className="bg-[#A8B8A5] hover:bg-[#8B7355] text-[#5D4037] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                     Get Directions
                  </button>
               </div>

               <div
                  className="h-96 lg:h-full rounded-2xl bg-cover bg-center"
                  style={{
                     backgroundImage: "url(/coffee.jpg)",
                  }}
                  data-aos="fade-left"
               ></div>
            </div>
         </div>
      </section>
   );
};

export default AboutCTA;
