import React from "react";
import { FaRecycle, FaCrown, FaUmbrellaBeach, FaSpa } from "react-icons/fa";

const AboutValues = () => {
   const values = [
      {
         icon: FaRecycle,
         title: "Eco-Conscious",
         description: "Sustainable packaging and ethically sourced ingredients",
      },
      {
         icon: FaCrown,
         title: "Premium Quality",
         description: "Handcrafted with attention to every detail",
      },
      {
         icon: FaUmbrellaBeach,
         title: "Coastal Spirit",
         description: "Inspired by the laid-back California lifestyle",
      },
      {
         icon: FaSpa,
         title: "Mindful Wellness",
         description: "Nourishing food for body and soul",
      },
   ];

   return (
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 font-['Playfair_Display']">
                  Our Values
               </h2>
               <div className="w-24 h-1 bg-[#8B7355] mx-auto mb-6"></div>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Guiding principles that shape every aspect of the Bageljoon
                  experience
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, index) => (
                  <div
                     key={index}
                     className="text-center p-8 rounded-2xl bg-[#F5F1E8] hover:bg-[#8B7355] group transition-all duration-300"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-[#A8B8A5] transition-colors duration-300">
                        <value.icon className="text-2xl text-[#8B7355] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-[#5D4037] mb-4 group-hover:text-white transition-colors duration-300">
                        {value.title}
                     </h3>
                     <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                        {value.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AboutValues;
