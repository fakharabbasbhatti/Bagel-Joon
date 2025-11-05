import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    title: "Bagels & Sandwiches",
    desc: "Freshly baked sourdough bagels and handcrafted breakfast sandwiches.",
    img: "bagle.avif",
    animation: "zoom-in",
  },
  {
    title: "Coffee & Beverages",
    desc: "Signature hot brews, iced lattes, and cold brew specialties.",
    img: "cofee.avif",
    animation: "zoom-in",
  },
  {
    title: "Cream & Spreads",
    desc: "Artisan cream cheese pints and eco-friendly wooden spreaders.",
    img: "cream.jpg",
    animation: "zoom-in",
  },
  {
    title: "Merch & Essentials",
    desc: "Minimal, reusable packaging and lifestyle accessories.",
    img: "b4.jpg",
    animation: "zoom-in",
  },
];

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-out-cubic",
      once: true, // prevent disappearing issue
    });
    AOS.refresh(); // ensure visible on reload
  }, []);

  return (
    <section className="bg-[#f8f4ee] py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className="flex items-center justify-center gap-4 md:gap-6 my-10 flex-wrap md:flex-nowrap"
          data-aos="fade-down"
        >
          <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
          <h2 className="text-2xl md:text-5xl font-light mb-2 text-[#3e2f1c] text-center whitespace-nowrap">
            Shop by Category
          </h2>
          <span className="hidden md:block w-12 md:w-20 h-[2px] bg-[#3e2f1c] opacity-60"></span>
        </div>

        <p
          className="text-[#6b5f50] mt-3 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore our signature bagels, handcrafted coffees, and natural spreads.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer"
              data-aos={item.animation}
              data-aos-delay={index * 150} // small stagger delay
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-[#3e2f1c]">
                  {item.title}
                </h3>
                <p className="text-[#6b5f50] mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;