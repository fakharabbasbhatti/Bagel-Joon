import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutTeam = () => {
   const teamMembers = [
      {
         name: "Sarah Chen",
         role: "Founder & Head Baker",
         image: "/woman1.jpg",
         description:
            "Passionate about sourdough fermentation and California cuisine",
      },
      {
         name: "Marcus Rodriguez",
         role: "Coffee Director",
         image: "/man.jpg",
         description: "Specialty coffee expert with 10+ years in the industry",
      },
      {
         name: "Elena Park",
         role: "Creative Director",
         image: "/woman2.jpg",
         description: "Blends minimalist design with coastal aesthetics",
      },
   ];

   return (
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 font-['Playfair_Display']">
                  Meet Our Team
               </h2>
               <div className="w-24 h-1 bg-[#8B7355] mx-auto mb-6"></div>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The passionate individuals behind Bageljoon's commitment to
                  excellence
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {teamMembers.map((member, index) => (
                  <div
                     key={index}
                     className="text-center group"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <div className="relative mb-6 overflow-hidden rounded-2xl">
                        <img
                           src={member.image}
                           alt={member.name}
                           className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#8B7355] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                     </div>
                     <h3 className="text-2xl font-bold text-[#5D4037] mb-2">
                        {member.name}
                     </h3>
                     <p className="text-[#8B7355] font-medium mb-3">
                        {member.role}
                     </p>
                     <p className="text-gray-600 mb-4">{member.description}</p>
                     <div className="flex justify-center space-x-4">
                        <FaInstagram className="text-gray-400 hover:text-[#8B7355] cursor-pointer transition-colors" />
                        <FaTwitter className="text-gray-400 hover:text-[#8B7355] cursor-pointer transition-colors" />
                        <FaLinkedin className="text-gray-400 hover:text-[#8B7355] cursor-pointer transition-colors" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AboutTeam;
