import React from "react";
import Hero from "../component/shop/Hero";
import FeaturedProducts from "../component/shop/FeaturedProducts";
import Sustainability from "../component/shop/Sustainability";
import LifestyleGallery from "../component/shop/LifestyleGallery";
import Categories from "../component/shop/Categories";

const Shops = () => {
   return (
      <div>
         <Hero />
         <Categories />
         <FeaturedProducts />
         <Sustainability />
         <LifestyleGallery />
      </div>
   );
};

export default Shops;
