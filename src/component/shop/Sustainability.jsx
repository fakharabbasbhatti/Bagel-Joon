import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sustainability = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true, // prevents disappearing on refresh
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-[#f8f4ee] py-24 px-6 overflow-hidden"> {/* 👈 overflow fix */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-12">
        {/* Image side */}
        <div
          className="relative flex items-center overflow-hidden rounded-2xl" // 👈 prevents image animation overflow
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="relative w-full">
            <img
              src="package.jpg"
              alt="Bageljoon Packaging"
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[500px]"
            />
            <div
              className="absolute bottom-1 -right-0 bg-[#d6c5a1] text-white px-5 py-3 rounded-xl text-sm shadow-md"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Eco-Friendly Design 🌱
            </div>
          </div>
        </div>

        {/* Text side */}
        <div
          className="flex flex-col justify-center overflow-hidden" // 👈 adds safety for long text
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#3e2f1c] leading-snug">
            Sustainable Packaging, <br />
            Elevated Aesthetic.
          </h2>

          <p
            className="text-[#6b5f50] text-lg mt-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Every detail of our packaging is designed to reflect our California
            roots — clean, natural, and thoughtful. From recyclable bagel boxes
            to compostable coffee cups, Bageljoon blends modern minimalism with
            sustainability for a premium yet planet-friendly experience.
          </p>

          <div
            className="flex flex-wrap gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-[#f8f4ee] rounded-xl px-5 py-3 text-[#3e2f1c] text-sm font-medium shadow-sm">
              ♻️ 100% Recyclable Materials
            </div>
            <div className="bg-[#f8f4ee] rounded-xl px-5 py-3 text-[#3e2f1c] text-sm font-medium shadow-sm">
              🌾 Natural Textures
            </div>
            <div className="bg-[#f8f4ee] rounded-xl px-5 py-3 text-[#3e2f1c] text-sm font-medium shadow-sm">
              ☕ Premium Feel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;