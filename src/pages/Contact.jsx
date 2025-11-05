import React from "react";
import ContactHero from "../component/contact/ContactHero";
import ContactInfo from "../component/contact/ContactInfo";
import ContactForm from "../component/contact/ContactForm";
import ContactMap from "../component/contact/ContactMap";
import ContactFAQ from "../component/contact/ContactFAQ";

const Contact = () => {
   return (
      <div className="overflow-hidden pt-20">
         <ContactHero />
         <ContactInfo />
         <ContactForm />
         <ContactMap />
         <ContactFAQ />
      </div>
   );
};

export default Contact;
