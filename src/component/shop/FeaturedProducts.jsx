import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const featuredProducts = [
   {
      title: "Signature Latte",
      desc: "Smooth espresso with perfectly steamed oat milk.",
      price: "$5.50",
      img: "/signature.jpg",
      animation: "fade-right",
   },
   {
      title: "Classic Cold Brew",
      desc: "Brewed slow for a bold, refreshing coffee taste.",
      price: "$4.75",
      img: "/ccb.webp",
      animation: "fade-up",
   },
   {
      title: "Avocado Bagel",
      desc: "Sourdough bagel topped with smashed avocado and seeds.",
      price: "$7.00",
      img: "/classic.jpg",
      animation: "fade-left",
   },
   {
      title: "Chai Spice",
      desc: "A cozy blend of chai spices and espresso.",
      price: "$6.00",
      img: "/ChaiSpice.webp",
      animation: "fade-up",
   },
];

const FeaturedProducts = () => {
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
      <section className="bg-[#fdfbf7] py-24 px-6 text-center overflow-hidden">
         <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div
               className="flex items-center justify-center gap-4 md:gap-6 mb-10 flex-wrap md:flex-nowrap"
               data-aos="fade-down"
            >
               <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
               <h2 className="text-3xl md:text-5xl font-light text-[#3e2f1c] tracking-wide">
                  Featured Favorites
               </h2>
               <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
            </div>

            <p
               className="text-[#6b5f50] mt-3 text-lg max-w-2xl mx-auto leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="150"
            >
               Crafted with care — our most loved drinks & bites.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
               {featuredProducts.map((item, index) => (
                  <div
                     key={index}
                     className="group bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden relative"
                     data-aos={item.animation}
                     data-aos-delay={index * 150}
                  >
                     {/* Image */}
                     <div className="relative h-60 overflow-hidden">
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                     </div>

                     {/* Content */}
                     <div className="p-6 text-left group-hover:bg-[#f4ede5] transition-colors duration-500">
                        <h3 className="text-2xl font-medium text-[#3e2f1c] mb-2 group-hover:text-[#6b4e2f] transition-colors duration-300">
                           {item.title}
                        </h3>
                        <p className="text-[#6b5f50] text-sm mb-4 leading-relaxed">
                           {item.desc}
                        </p>

                        <div className="flex items-center justify-between">
                           <span className="text-[#3e2f1c] font-semibold text-lg">
                              {item.price}
                           </span>
                           <button className="bg-[#6b4e2f] text-white px-5 py-2 rounded-full hover:bg-[#5a3f25] transition-all duration-300">
                              Order Now
                           </button>
                        </div>

                        {/* Decorative underline */}
                        <span className="block w-0 h-[2px] bg-[#6b4e2f] mt-3 transition-all duration-500 group-hover:w-16"></span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FeaturedProducts;
