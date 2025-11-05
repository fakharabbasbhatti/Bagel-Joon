import React from "react";
import { FaCoffee, FaBox, FaLeaf, FaRecycle } from "react-icons/fa";

const AboutPackaging = () => {
   const packagingItems = [
      {
         icon: FaCoffee,
         title: "Iced Coffee Cups",
         description:
            "Double-cup concept with clear inner + printed paper outer sleeve",
         color: "bg-blue-50",
      },
      {
         icon: FaBox,
         title: "Bagel Boxes",
         description:
            "Single & 6-bagel boxes with premium bakery-grade cardboard",
         color: "bg-amber-50",
      },
      {
         icon: FaLeaf,
         title: "Eco Materials",
         description:
            "Sustainable, recyclable materials with minimalist design",
         color: "bg-green-50",
      },
      {
         icon: FaRecycle,
         title: "Vacuum-Seal Cups",
         description:
            "Transparent, airtight can-style cups for specialty drinks",
         color: "bg-purple-50",
      },
   ];

   return (
      <section className="py-20 bg-[#F5F1E8]">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 font-['Playfair_Display']">
                  Premium Packaging
               </h2>
               <div className="w-24 h-1 bg-[#8B7355] mx-auto mb-6"></div>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Eco-conscious, photogenic packaging that reflects our
                  commitment to quality and sustainability
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {packagingItems.map((item, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="flex items-start space-x-6">
                        <div
                           className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center group-hover:bg-[#8B7355] transition-colors duration-300`}
                        >
                           <item.icon className="text-2xl text-[#8B7355] group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-xl font-bold text-[#5D4037] mb-3">
                              {item.title}
                           </h3>
                           <p className="text-gray-600 leading-relaxed">
                              {item.description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
               <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                  <FaRecycle className="text-[#A8B8A5] mr-3" />
                  <span className="text-[#5D4037] font-medium">
                     Committed to sustainable packaging solutions
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutPackaging;
