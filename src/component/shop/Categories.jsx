import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categoriesArray = [
   {
      title: "Bagels & Sandwiches",
      desc: "Freshly baked bagels and handcrafted breakfast sandwiches.",
      img: "/burgur.jpg",
      animation: "zoom-in-up",
   },
   {
      title: "Coffee & Beverages",
      desc: "Signature hot brews, iced lattes, and cold brew specialties.",
      img: "/burgur2.webp",
      animation: "zoom-in-up",
   },
   {
      title: "Cream & Spreads",
      desc: "Artisan cream cheese pints and eco-friendly wooden spreaders.",
      img: "/coffee.jpg",
      animation: "zoom-in-up",
   },
   {
      title: "Merch & Essentials",
      desc: "Minimal, reusable packaging and lifestyle accessories.",
      img: "/coffee2.jpg",
      animation: "zoom-in-up",
   },
];

const Categories = () => {
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
      <section className="bg-[#f8f4ee] py-20 px-6 text-center overflow-hidden">
         <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div
               className="flex items-center justify-center gap-4 md:gap-6 my-10 flex-wrap md:flex-nowrap"
               data-aos="fade-down"
            >
               <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
               <h2 className="text-3xl md:text-5xl font-light text-[#3e2f1c] text-center whitespace-nowrap tracking-wide">
                  Shop by Category
               </h2>
               <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
            </div>

            <p
               className="text-[#6b5f50] mt-3 text-lg max-w-2xl mx-auto leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="200"
            >
               Explore our signature bagels, handcrafted coffees, and natural
               spreads.
            </p>

            {/* Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
               {categoriesArray.map((item, index) => (
                  <div
                     key={index}
                     className="group bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden cursor-pointer relative"
                     data-aos={item.animation}
                     data-aos-delay={index * 150}
                  >
                     {/* Image Section */}
                     <div className="relative h-60 overflow-hidden">
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                     </div>

                     {/* Content */}
                     <div className="p-6 group-hover:bg-[#f4ede5] transition-colors duration-500">
                        <h3 className="text-xl font-medium text-[#3e2f1c] group-hover:text-[#6b4e2f] transition-colors">
                           {item.title}
                        </h3>
                        <p className="text-[#6b5f50] mt-2 text-sm leading-relaxed">
                           {item.desc}
                        </p>

                        {/* Decorative underline on hover */}
                        <span className="block w-0 h-[2px] bg-[#6b4e2f] mt-3 transition-all duration-500 group-hover:w-16 mx-auto"></span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Categories;
