import React from "react";
import { motion } from "framer-motion";

// Brand Colors
const brown = "#5B3A29";
const cream = "#F5EDE2";
const green = "#7DA17A";

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
};

// Premium Packaging Section
export function PackagingTypes() {
    const cards = [
        {
            title: "Cups & Sleeves",
            desc: "Our sustainable iced & hot cup series come with eco-friendly sleeves that ensure comfort and style in every sip.",
            badge: "Most Photogenic",
            img: "cup1.png",
        },
        {
            title: "Boxes & Wraps",
            desc: "Minimal and stackable packaging for bagels, pastries, or sandwiches — made from recycled, food-grade materials.",
            badge: "Stackable & Robust",
            img: "box.png",
        },
        {
            title: "Specials & Extras",
            desc: "Wooden spreaders, cream cheese pints, and drink carriers — every extra detail built to enhance your brand’s experience.",
            badge: "Unique Touch",
            img: "extra.png",
        },
    ];

    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-linear-to-br from-[#fff8f3] via-[#f5ede2] to-white overflow-hidden">
            {/* Soft background texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-[#1b1b1b] mb-10 text-center"
                >
                    Our Premium Packaging Collection
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((c, i) => (
                        <motion.article
                            key={c.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#efe6de] shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="h-56 w-full overflow-hidden">
                                <motion.img
                                    src={c.img}
                                    alt={c.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-[#1b1b1b]">
                                        {c.title}
                                    </h3>
                                    <span
                                        className="text-xs px-3 py-1 rounded-full"
                                        style={{ background: "rgba(125,161,122,0.12)", color: green }}
                                    >
                                        {c.badge}
                                    </span>
                                </div>
                                <p className="text-sm text-[#4b4b4b] leading-relaxed">{c.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
