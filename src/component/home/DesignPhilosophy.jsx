import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FiFeather, FiCheckCircle, FiCamera } from "react-icons/fi";

export default function DesignPhilosophy() {
  const COLORS = {
    brown: "#7B5A3A",
    cream: "#F5EBDD",
    green: "#B8C1A3",
    charcoal: "#3A2E25",
  };

  const items = [
    {
      icon: <FiFeather size={26} />,
      title: "Sustainable Materials",
      desc: "Recyclable cardboard, compostable sleeves, and low-VOC inks that minimize environmental impact.",
      aos: "fade-up",
    },
    {
      icon: <FiCheckCircle size={26} />,
      title: "Production-Ready",
      desc: "Precise dielines and vector files (AI / EPS / PDF) ready for scalable manufacturing on global platforms.",
      aos: "fade-up",
    },
    {
      icon: <FiCamera size={26} />,
      title: "Photogenic Design",
      desc: "Clean, tactile packaging that enhances lifestyle photography and aligns with modern café branding.",
      aos: "fade-up",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.cream} 0%, #f9f3ea 100%)`,
      }}
    >
      {/* ✨ Background aesthetic */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[#B8C1A3]/25 blur-[180px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#7B5A3A]/15 blur-[150px] rounded-full -z-10" />

      {/* 🪶 Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{ color: COLORS.brown }}
        >
          Design Philosophy
        </h2>

        <p
          data-aos="fade-up"
          className="text-[1.15rem] leading-relaxed text-balance"
          style={{ color: `${COLORS.charcoal}cc` }}
        >
          Minimal lines, tactile materials, and a focus on natural tones. Each
          piece balances scalability and sophistication — ensuring every
          packaging item looks refined, stackable, and production-ready for
          modern café environments.
        </p>
      </div>

      {/* 🌿 Feature Cards */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {items.map((it, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            data-aos={it.aos}
            data-aos-delay={i * 150}
            className="bg-white p-5 rounded-3xl shadow-md border hover:shadow-xl transition-all duration-500 text-center"
            style={{ borderColor: "rgba(0,0,0,0.05)" }}
          >
            {/* 🌱 Icon */}
            <div
              data-aos="zoom-in"
              data-aos-delay={i * 100 + 200}
              className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full shadow-sm"
              style={{
                backgroundColor: `${COLORS.green}35`,
                color: COLORS.brown,
              }}
            >
              {it.icon}
            </div>

            {/* Title */}
            <h4
              data-aos="fade-up"
              data-aos-delay={i * 150 + 250}
              className="text-xl font-semibold mb-3 tracking-wide"
              style={{ color: COLORS.brown }}
            >
              {it.title}
            </h4>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay={i * 200 + 300}
              className="text-[1rem] leading-relaxed font-medium"
              style={{ color: `${COLORS.charcoal}cc` }}
            >
              {it.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🌾 Decorative Accent Line */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-16 mx-auto w-32 h-1 rounded-full"
        style={{ backgroundColor: COLORS.green }}
      ></div>
    </section>
  );
}
