import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactFAQ = () => {
   const [activeIndex, setActiveIndex] = useState(null);

   const faqs = [
      {
         question: "Do you offer catering services for events?",
         answer:
            "Yes! We offer catering for corporate events, weddings, and private parties. Our catering menu features assorted bagel platters, cream cheese spreads, coffee stations, and more. Contact us for custom quotes.",
      },
      {
         question:
            "Are your bagels suitable for people with dietary restrictions?",
         answer:
            "We offer vegan and gluten-free options. Our sourdough bagels are naturally fermented, which some find easier to digest. Please inform us of any allergies, and we'll guide you to suitable options.",
      },
      {
         question: "Do you have wholesale partnerships?",
         answer:
            "Absolutely! We partner with local businesses, hotels, and cafes. Our wholesale program offers fresh bagels delivered daily. Email us at wholesale@bageljoon.com for partnership details.",
      },
      {
         question: "What makes your coffee special?",
         answer:
            "We source single-origin beans from sustainable farms and roast them locally in small batches. Our baristas are trained in specialty coffee preparation, ensuring each cup meets our high standards.",
      },
      {
         question: "Can I pre-order for pickup?",
         answer:
            "Yes! You can pre-order through our website or by calling the cafe. Pre-orders help us prepare your items in advance for quick pickup during busy hours.",
      },
      {
         question: "Do you host events at your cafe?",
         answer:
            "We host bagel-making workshops, coffee tasting events, and private gatherings after hours. Follow us on social media for event announcements or contact us to host your own event.",
      },
   ];

   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <section className=" py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4 font-['Playfair_Display']">
                  Frequently Asked Questions
               </h2>
               <div className="w-24 h-1 bg-[#8B7355] mx-auto mb-6"></div>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Quick answers to common questions about Bageljoon
               </p>
            </div>

            <div className="max-w-4xl mx-auto">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     className="mb-4 bg-[#F5F1E8] rounded-2xl overflow-hidden transition-all duration-300"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     <button
                        className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                        onClick={() => toggleFAQ(index)}
                     >
                        <span className="text-lg font-bold text-[#5D4037] pr-4">
                           {faq.question}
                        </span>
                        {activeIndex === index ? (
                           <FaChevronUp className="text-[#8B7355] flex-shrink-0" />
                        ) : (
                           <FaChevronDown className="text-[#8B7355] flex-shrink-0" />
                        )}
                     </button>

                     <div
                        className={`px-6 pb-6 transition-all duration-300 ${
                           activeIndex === index ? "block" : "hidden"
                        }`}
                     >
                        <p className="text-gray-600 leading-relaxed">
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-12" data-aos="fade-up">
               <div className="bg-[#F5F1E8] rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[#5D4037] mb-4">
                     Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-6">
                     Don't hesitate to reach out directly. We're always happy to
                     help!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="tel:(858) 555-0123"
                        className="bg-[#8B7355] hover:bg-[#5D4037] text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3"
                     >
                        <span>Call Us Now</span>
                     </a>
                     <a
                        href="mailto:hello@bageljoon.com"
                        className="border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3"
                     >
                        <span>Email Us</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactFAQ;
