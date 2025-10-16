import React from "react";
import HeroSection from "../Component/HeroSection";
import PopularWomen from "../Component/PopularWomen";
import Offers from "../Component/offers";
import NewCollection from "../Component/NewCollection";
import NewLetter from "../Component/NewLetter";
import Scrolltotop from "../Component/ScrollToTop";

const Shop = () => {
  return (
    <main className="relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-upper_custom opacity-30 dark:opacity-10 -z-10"></div>
      {/*Shop Page Sections */}
      <HeroSection />
      <PopularWomen />
      <Offers />
      <NewCollection />
      <NewLetter />
      <Scrolltotop />
    </main>
  );
};

export default Shop;
