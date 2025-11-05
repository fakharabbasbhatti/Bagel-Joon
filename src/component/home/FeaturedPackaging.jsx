import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";

export default function FeaturedPackaging({ items }) {
  const COLORS = {
    brown: "#7B5A3A",
    cream: "#F5EBDD",
    green: "#B8C1A3",
    charcoal: "#3A2E25",
  };

  const defaultItems = [
    {
      title: "Iced Coffee Sleeve",
      subtitle: "Double-cup concept for coastal cafés",
      img: "https://cdn.pixabay.com/photo/2017/09/21/07/42/coffee-2770971_640.jpg",
    },
    {
      title: "Hot Cup (12 / 16 oz)",
      subtitle: "Matte cream with premium sleeve",
      img: "https://cdn.pixabay.com/photo/2017/03/27/14/18/coffee-2179028_640.jpg",
    },
    {
      title: "Clear Can Cup",
      subtitle: "Vacuum-seal, crystal clarity",
      img: "https://cdn.pixabay.com/photo/2016/09/21/22/00/tea-1685847_640.jpg",
    },
    {
      title: "Single Bagel Box",
      subtitle: "Eco-sturdy kraft base, stackable",
      img: "https://cdn.pixabay.com/photo/2023/01/09/05/55/bagel-7706691_640.jpg",
    },
  ];

  const cards = items?.length ? items : defaultItems;

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      className="relative py-14 md:py-24 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: COLORS.cream }}
    >
      {/* 🌿 Background aesthetic */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#B8C1A3]/25 blur-[180px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#7B5A3A]/20 blur-[160px] rounded-full -z-10"></div>

      {/* 🧭 Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
        <div data-aos="fade-right">
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: COLORS.brown }}
          >
            Featured Packaging
          </h2>
          <p
            className="mt-3 text-sm md:text-[1.15rem] leading-relaxed max-w-2xl"
            style={{ color: `${COLORS.charcoal}cc` }}
          >
            Explore our signature packaging lineup — minimal, sustainable, and
            built for photogenic branding moments that connect your café’s
            personality with your customers’ senses.
          </p>
        </div>

        <Link
          to="/services"
          data-aos="fade-left"
          className="inline-flex items-center gap-2 mt-6 md:mt-0 px-6 py-2.5 border rounded-full font-medium text-sm transition-all duration-300 hover:bg-[#7B5A3A]/10 hover:scale-[1.05]"
          style={{ borderColor: COLORS.brown, color: COLORS.brown }}
        >
          Explore full collection <FiArrowRight />
        </Link>
      </div>

      {/* 🧃 Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, idx) => (
          <article
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
            className="group relative bg-white rounded-[1.75rem] overflow-hidden border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            style={{ borderColor: "rgba(0,0,0,0.05)" }}
          >
            {/* 🖼 Image */}
            <div className="relative overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-[#000]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 🔘 Hover Buttons (only show on hover) */}
              <div
                className="
                  absolute inset-0 flex flex-row items-center justify-center gap-3
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-700 ease-out
                "
              >
                <Link
                  to="/contact"
                  className="px-5 py-2 text-[0.95rem] font-medium rounded-full backdrop-blur-sm bg-white/90 text-[#3A2E25] hover:bg-white shadow-md transition"
                >
                  View Details
                </Link>
                <Link to="/shop"
                  className="px-5 py-2 text-[0.95rem] font-medium rounded-full flex items-center gap-2 backdrop-blur-sm bg-[#7B5A3A]/90 text-white hover:bg-[#7B5A3A] shadow-md transition"
                >
                  Order <FiShoppingCart size={16} />
                </Link>
              </div>
            </div>

            {/* 🪶 Content */}
            <div
              className="p-4 md:p-6"
              data-aos="fade-up"
              data-aos-delay={idx * 200 + 100}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: COLORS.brown }}
              >
                {card.title}
              </h3>
              <p
                className="text-[1rem] leading-relaxed font-medium"
                style={{ color: `${COLORS.charcoal}cc` }}
              >
                {card.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
