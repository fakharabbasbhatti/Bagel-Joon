import React from "react";
import { motion } from "framer-motion";

// Brand Colors
const brown = "#5B3A29";
const cream = "#F5EDE2";
const green = "#7DA17A";

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
};

// Professional Brand Values Section
export function BrandValues() {
    const cards = [
        {
            title: "Sustainability",
            desc: "We prioritize eco-conscious sourcing and packaging to protect our planet and inspire mindful consumption.",
            badge: "Eco",
            img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
        },
        {
            title: "Premium Quality",
            desc: "Each item is crafted with precision, using premium materials that reflect sophistication and durability.",
            badge: "Top",
            img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        },
        {
            title: "Innovation",
            desc: "We merge creativity with practicality — designing modern solutions for everyday lifestyle and branding needs.",
            badge: "Creative",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
        },
    ];

    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-linear-to-br from-[#fff8f3] via-[#f5ede2] to-white overflow-hidden">
            {/* Soft background texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-[#1b1b1b] text-center mb-10"
                >
                    Our Brand Values
                </motion.h2>

                {/* Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((c, i) => (
                        <motion.article
                            key={c.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="group relative bg-white/70 backdrop-blur-md border border-[#efe6de] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-5">
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Title + Badge */}
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <h3 className="text-lg font-semibold text-[#1b1b1b]">
                                    {c.title}
                                </h3>
                                <span
                                    className="text-xs px-3 py-1 rounded-full"
                                    style={{
                                        background: "rgba(125,161,122,0.12)",
                                        color: green,
                                    }}
                                >
                                    {c.badge}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[#4b4b4b] leading-relaxed">
                                {c.desc}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
