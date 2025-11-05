import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const featuredProducts = [
  {
    title: "Signature Latte",
    desc: "Smooth espresso with perfectly steamed oat milk.",
    price: "$5.50",
    img: "b.jpg",
    animation: "fade-right",
  },
  {
    title: "Classic Cold Brew",
    desc: "Brewed slow for a bold, refreshing coffee taste.",
    price: "$4.75",
    img: "b3.jpg",
    animation: "fade-up",
  },
  {
    title: "Avocado Bagel",
    desc: "Sourdough bagel topped with smashed avocado and seeds.",
    price: "$7.00",
    img: "g.jpg",
    animation: "fade-left",
  },
  {
    title: "Chai Spice",
    desc: "A cozy blend of chai spices and espresso.",
    price: "$6.00",
    img: "b2.jpg",
    animation: "fade-up",
  },
];

const FeaturedProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // smooth timing
      easing: "ease-out-cubic",
      once: true, // avoid disappearing on refresh
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-[#fdfbf7] py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-light text-[#3e2f1c]"
          data-aos="fade-down"
        >
          Featured Favorites
        </h2>
        <p
          className="text-[#6b5f50] mt-3 text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Crafted with care — our most loved drinks & bites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
          {featuredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 duration-300 overflow-hidden"
              data-aos={item.animation}
              data-aos-delay={index * 150}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-medium text-[#3e2f1c] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6b5f50] text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#3e2f1c] font-semibold text-lg">
                    {item.price}
                  </span>
                  <button className="bg-[#6b4e2f] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;