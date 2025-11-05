import React from "react";
import { FaLeaf, FaSeedling, FaAward } from "react-icons/fa";

const AboutStory = () => {
   return (
      <section className="py-20 bg-[#F5F1E8]">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div data-aos="fade-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-6 font-['Playfair_Display']">
                     Our Story
                  </h2>
                  <div className="w-20 h-1 bg-[#8B7355] mb-8"></div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                     Born in the heart of La Jolla, Bageljoon emerged from a
                     simple passion for authentic, California-style sourdough
                     bagels and exceptional coffee. We believe in the art of
                     slow fermentation, quality ingredients, and mindful
                     consumption.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                     Our name combines "bagel" with the Korean word "joon"
                     (meaning talented), reflecting our commitment to
                     craftsmanship and excellence in every bite and sip.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <span className="bg-white px-4 py-2 rounded-full text-[#8B7355] border border-[#8B7355] text-sm flex items-center">
                        <FaLeaf className="mr-2" />
                        Artisanal Craft
                     </span>
                     <span className="bg-white px-4 py-2 rounded-full text-[#8B7355] border border-[#8B7355] text-sm flex items-center">
                        <FaSeedling className="mr-2" />
                        Coastal Living
                     </span>
                     <span className="bg-white px-4 py-2 rounded-full text-[#8B7355] border border-[#8B7355] text-sm flex items-center">
                        <FaAward className="mr-2" />
                        Eco-Conscious
                     </span>
                  </div>
               </div>
               <div
                  className="h-96 lg:h-full rounded-2xl bg-cover bg-center"
                  style={{
                     backgroundImage:
                        "url(/story.jpg)",
                  }}
                  data-aos="fade-left"
               ></div>
            </div>
         </div>
      </section>
   );
};

export default AboutStory;
