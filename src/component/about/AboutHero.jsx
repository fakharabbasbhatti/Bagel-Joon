import React from "react";

const AboutHero = () => {
   return (
      <section
         className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
         style={{
            backgroundImage:
               "linear-gradient(rgba(139, 115, 85, 0.8), rgba(139, 115, 85, 0.8)), url(/story.jpg)",
         }}
         data-aos="fade-in"
      >
         <div className="text-center text-white max-w-4xl mx-auto">
            <h1
               className="text-5xl md:text-7xl font-bold mb-6 font-['Playfair_Display']"
               data-aos="fade-up"
            >
               Bageljoon
            </h1>
            <p
               className="text-xl md:text-2xl mb-8 font-light"
               data-aos="fade-up"
               data-aos-delay="200"
            >
               California-style sourdough bagels & specialty coffee
            </p>
            <div
               className="w-24 h-1 bg-[#A8B8A5] mx-auto mb-8"
               data-aos="fade-up"
               data-aos-delay="400"
            ></div>
            <p
               className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
               data-aos="fade-up"
               data-aos-delay="600"
            >
               Where modern minimalism meets coastal lifestyle. Every bagel
               tells a story of craftsmanship, quality, and conscious living.
            </p>
         </div>
      </section>
   );
};

export default AboutHero;
