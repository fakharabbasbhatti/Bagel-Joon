import React from "react";
import { FaMapMarkerAlt, FaDirections, FaCar, FaWalking } from "react-icons/fa";

const ContactMap = () => {
   return (
      <section className="py-20 bg-[#F5F1E8]">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div data-aos="fade-right">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-6 font-['Playfair_Display']">
                     Find Our Location
                  </h2>
                  <div className="w-20 h-1 bg-[#8B7355] mb-8"></div>

                  <div className="space-y-6 mb-8">
                     <div className="flex items-start space-x-4">
                        <FaMapMarkerAlt className="text-2xl text-[#8B7355] mt-1" />
                        <div>
                           <h3 className="text-xl font-bold text-[#5D4037] mb-2">
                              Address
                           </h3>
                           <p className="text-gray-600">
                              123 Coastal Avenue
                              <br />
                              La Jolla, CA 92037
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-4">
                        <FaDirections className="text-2xl text-[#8B7355] mt-1" />
                        <div>
                           <h3 className="text-xl font-bold text-[#5D4037] mb-2">
                              Getting Here
                           </h3>
                           <div className="space-y-2">
                              <div className="flex items-center space-x-3 text-gray-600">
                                 <FaCar className="text-[#A8B8A5]" />
                                 <span>15 min from downtown San Diego</span>
                              </div>
                              <div className="flex items-center space-x-3 text-gray-600">
                                 <FaWalking className="text-[#A8B8A5]" />
                                 <span>5 min walk from La Jolla Shores</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <button className="bg-[#8B7355] hover:bg-[#5D4037] text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3">
                        <FaDirections />
                        <span>Get Directions</span>
                     </button>
                     <button className="border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white py-3 px-6 rounded-xl font-bold transition-all duration-300">
                        Download Menu
                     </button>
                  </div>
               </div>

               <div
                  className="h-96 lg:h-full rounded-2xl bg-gray-200 overflow-hidden relative"
                  data-aos="fade-left"
               >
                  {/* Map Placeholder - Replace with actual map component */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355] to-[#A8B8A5] flex items-center justify-center">
                     <div className="text-center text-white">
                        <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
                        <p className="text-xl font-bold">Bageljoon Location</p>
                        <p className="text-sm opacity-90">
                           123 Coastal Ave, La Jolla, CA
                        </p>
                     </div>
                  </div>

                  {/* Map overlay elements */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                     <span className="text-sm font-bold text-[#5D4037]">
                        📍 We're Here!
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactMap;
