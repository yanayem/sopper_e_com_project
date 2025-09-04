import React from "react";
import NavBar from "../Component/NavBar";
import HomeSection from "../Component/HomeSection";
import NavBarSeconde from "../Component/NavBarSeconde";
import ServiceArea from "../Component/ServiceArea";
import HeroSection from "../Component/HeroSection";
import CaseStudies from "../Component/CaseStudies";
import WorkingProcess from "../Component/WorkingProcess";
import TeamSection from "../Component/TeamSection";
import CustomerReview from "../Component/CustomerReview";
import ContactSection from "../Component/ContactSection";
import FooterSection from "../Component/FooterSection";
import Scrolltotop from "../Component/ScrollToTop"

const Home = () => {
  return (
    <main className="relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-upper_custom opacity-30 dark:opacity-10 -z-10"></div>

      {/* Page Sections */}
      <NavBar />
      <HomeSection />
      <NavBarSeconde />
      <ServiceArea />
      <HeroSection />
      <CaseStudies />
      <WorkingProcess />
      <TeamSection />
      <CustomerReview />
      <ContactSection />
      <FooterSection />
      <Scrolltotop />
    </main>
  );
};

export default Home;
