import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
   return (
      <section
         className="min-h-[60vh] py-10 lg:py-30 bg-cover bg-center flex items-center justify-center px-4 relative"
         style={{
            backgroundImage:
               "linear-gradient(rgba(139, 115, 85, 0.85), rgba(139, 115, 85, 0.85)), url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
         }}
         data-aos="fade-in"
      >
         <div className="text-center text-white max-w-4xl mx-auto">
            <h1
               className="text-4xl md:text-6xl font-bold mb-6 font-['Playfair_Display']"
               data-aos="fade-up"
            >
               Get in Touch
            </h1>
            <p
               className="text-xl md:text-2xl mb-8 font-light"
               data-aos="fade-up"
               data-aos-delay="200"
            >
               We'd love to hear from you
            </p>
            <div
               className="w-24 h-1 bg-[#A8B8A5] mx-auto mb-8"
               data-aos="fade-up"
               data-aos-delay="400"
            ></div>

            <div
               className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
               data-aos="fade-up"
               data-aos-delay="600"
            >
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#A8B8A5] rounded-full flex items-center justify-center mb-4">
                     <FaPhone className="text-2xl text-white" />
                  </div>
                  <p className="text-lg">(858) 555-BAGEL</p>
               </div>

               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#A8B8A5] rounded-full flex items-center justify-center mb-4">
                     <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <p className="text-lg">hello@bageljoon.com</p>
               </div>

               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#A8B8A5] rounded-full flex items-center justify-center mb-4">
                     <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <p className="text-lg">La Jolla, CA</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactHero;
