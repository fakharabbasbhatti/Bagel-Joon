import React from "react";
import {
   FaClock,
   FaWifi,
   FaParking,
   FaDog,
   FaAccessibleIcon,
} from "react-icons/fa";

const ContactInfo = () => {
   const features = [
      {
         icon: FaClock,
         title: "Opening Hours",
         details: [
            "Monday - Friday: 7:00 AM - 4:00 PM",
            "Saturday - Sunday: 8:00 AM - 5:00 PM",
         ],
      },
      {
         icon: FaWifi,
         title: "Amenities",
         details: [
            "Free High-Speed WiFi",
            "Outdoor Seating",
            "Takeaway Available",
         ],
      },
      {
         icon: FaParking,
         title: "Parking",
         details: [
            "Street Parking",
            "Nearby Parking Garage",
            "Bike Racks Available",
         ],
      },
      {
         icon: FaDog,
         title: "Pet Friendly",
         details: [
            "Dog-Friendly Patio",
            "Water Bowls Available",
            "Treats for Good Dogs",
         ],
      },
      {
         icon: FaAccessibleIcon,
         title: "Accessibility",
         details: [
            "Wheelchair Accessible",
            "ADA Compliant",
            "Service Animals Welcome",
         ],
      },
   ];

   return (
      <section className="py-20 bg-[#F5F1E8]">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 font-['Playfair_Display']">
                  Visit Our Cafe
               </h2>
               <div className="w-24 h-1 bg-[#8B7355] mx-auto mb-6"></div>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to know for your perfect Bageljoon
                  experience
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="w-16 h-16 bg-[#8B7355] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A8B8A5] transition-colors duration-300">
                        <feature.icon className="text-2xl text-white" />
                     </div>

                     <h3 className="text-2xl font-bold text-[#5D4037] mb-4">
                        {feature.title}
                     </h3>

                     <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                           <li
                              key={idx}
                              className="text-gray-600 flex items-start"
                           >
                              <span className="w-2 h-2 bg-[#A8B8A5] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ContactInfo;
