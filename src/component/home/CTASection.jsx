import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight } from "react-icons/fi";

const MotionLink = motion(Link); // ✅ motion-enabled Link

export default function CTASection() {
  const COLORS = {
    brown: "#7B5A3A",
    cream: "#F5EBDD",
    green: "#B8C1A3",
    charcoal: "#3A2E25",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden py-28 px-6 md:px-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.cream} 0%, #fff7ef 100%)`,
      }}
    >
      {/* 🔹 Background Blur Aesthetic */}
      <div
        data-aos="zoom-in"
        className="absolute -top-28 -left-28 w-[420px] h-[420px] bg-[#B8C1A3]/25 blur-[180px] rounded-full -z-10"
      />
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-[#7B5A3A]/15 blur-[160px] rounded-full -z-10"
      />

      {/* 🔸 CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl px-10 py-16 flex flex-col lg:flex-row items-center justify-between shadow-xl border backdrop-blur-md"
        style={{
          backgroundColor: COLORS.brown,
          color: COLORS.cream,
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {/* 📝 Text Side */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-center lg:text-left max-w-2xl"
        >
          <h3
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
            style={{
              fontFamily: "system-ui, sans-serif",
              color: COLORS.cream,
            }}
          >
            Ready to prototype your packaging?
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 text-base md:text-lg opacity-90 leading-relaxed"
            style={{ color: `${COLORS.cream}ee` }}
          >
            Bring your café experience to life with sample kits, dielines, and
            production-ready support — start crafting packaging that speaks your
            brand’s visual story today.
          </p>
        </div>

        {/* 🚀 Animated Motion Link Button */}
        <MotionLink
          data-aos="zoom-in"
          data-aos-delay="600"
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 8px 20px rgba(123, 90, 58, 0.25)",
          }}
          whileTap={{ scale: 0.97 }}
          to="/contact"
          className="mt-10 lg:mt-0 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base shadow-md transition-all duration-300"
          style={{
            backgroundColor: COLORS.cream,
            color: COLORS.brown,
          }}
        >
          Get Started <FiChevronRight className="text-lg" />
        </MotionLink>
      </motion.div>

      {/* ✨ Accent Line */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="mt-16 mx-auto w-32 h-1 rounded-full"
        style={{ backgroundColor: COLORS.green }}
      ></div>
    </section>
  );
}
