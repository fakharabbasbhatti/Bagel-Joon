import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // optional — adds small star icons

// Brand Colors
const brown = "#5B3A29";
const cream = "#F5EDE2";
const green = "#7DA17A";

// Card animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
};

// Professional Testimonials Section
export function Testimonials() {
    const testimonials = [
        {
            name: "Jane Doe",
            text: "The packaging not only looks amazing but also feels eco-conscious and luxurious. Perfect for our cafe branding!",
        },
        {
            name: "John Smith",
            text: "Beautifully crafted and delivered with care. The minimal design really elevates our coffee experience.",
        },
        {
            name: "Alice Lee",
            text: "Impressive quality — premium textures, natural tones, and thoughtful finishes. Customers love it!",
        },
    ];

    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-linear-to-br from-[#fff8f3] via-[#f5ede2] to-white overflow-hidden">
            {/* Soft Paper Background Texture */}
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
                    What Our Clients Say
                </motion.h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.article
                            key={t.name}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="relative group bg-white/70 backdrop-blur-md border border-[#efe6de] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
                        >
                            {/* Decorative Quote */}
                            <div className="text-[#7DA17A] text-4xl mb-3 opacity-80 leading-none">“</div>

                            {/* Review Text */}
                            <p className="text-sm text-[#4b4b4b] leading-relaxed italic mb-6">
                                {t.text}
                            </p>

                            {/* Divider Line */}
                            <div className="w-16 h-px bg-[#ddd] mx-auto mb-4"></div>

                            {/* Reviewer Info */}
                            <h3 className="text-base font-semibold text-[#1b1b1b] mb-2">
                                {t.name}
                            </h3>

                            {/* Star Ratings */}
                            <div className="flex justify-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        fill={green}
                                        color={green}
                                        className="opacity-90"
                                    />
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
